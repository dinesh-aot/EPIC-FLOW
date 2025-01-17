import { Dispatch, SetStateAction, createContext, useContext } from "react";
import React from "react";
import TrackDialog from "../../shared/TrackDialog";
import StatusForm from "./StatusForm";
import { Status } from "../../../models/status";
import { showNotification } from "../../shared/notificationProvider";
import statusService from "../../../services/statusService/statusService";
import { useSearchParams } from "../../../hooks/useSearchParams";
import { WorkplanContext } from "../WorkPlanContext";
import { getErrorMessage } from "../../../utils/axiosUtils";
import useRouterLocationStateForHelpPage from "hooks/useRouterLocationStateForHelpPage";
import { WORKPLAN_TAB } from "../constants";

interface StatusContextProps {
  setShowStatusForm: Dispatch<SetStateAction<boolean>>;
  status?: Status | null;
  setStatus: Dispatch<SetStateAction<Status | undefined>>;
  onSave(data: any, callback: () => any): any;
  setShowApproveStatusDialog: Dispatch<SetStateAction<boolean>>;
  selectedHistoryIndex?: number;
  setSelectedHistoryIndex: Dispatch<SetStateAction<number>>;
  setIsCloning: Dispatch<SetStateAction<boolean>>;
  workId: string | null;
  isCloning: boolean;
}

interface StatusContainerRouteParams extends URLSearchParams {
  work_id: string;
}

export const StatusContext = createContext<StatusContextProps>({
  setShowStatusForm: () => ({}),
  setShowApproveStatusDialog: () => ({}),
  status: null,
  setStatus: () => ({}),
  onSave: (data: any, callback: () => any) => ({}),
  selectedHistoryIndex: 0,
  setSelectedHistoryIndex: () => ({}),
  setIsCloning: () => ({}),
  isCloning: false,
  workId: null,
});

export const StatusProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [showStatusForm, setShowStatusForm] = React.useState<boolean>(false);
  const [showApproveStatusDialog, setShowApproveStatusDialog] =
    React.useState<boolean>(false);
  const [isCloning, setIsCloning] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<Status>();
  const [selectedHistoryIndex, setSelectedHistoryIndex] =
    React.useState<number>(0);
  const query = useSearchParams<StatusContainerRouteParams>();
  const workId = React.useMemo(() => query.get("work_id"), [query]);
  const { getWorkStatuses, setStatuses } = useContext(WorkplanContext);

  const onDialogClose = () => {
    setShowStatusForm(false);
    setIsCloning(false);
  };

  const updateStatus = async (data: any, callback: () => any) => {
    const { description, posted_date } = data;
    await statusService?.update(Number(workId), Number(status?.id), {
      description,
      posted_date,
    });
    showNotification(`Status details updated`, {
      type: "success",
    });
    setStatus(undefined);
    callback();
  };

  const createStatus = async (data: any, callback: () => any) => {
    const { description, posted_date } = data;
    const result = await statusService?.create(Number(workId), {
      description,
      posted_date,
    });
    if (result && result.status === 201) {
      showNotification(`Status Created`, {
        type: "success",
      });
      callback();
    }
  };

  const onSave = async (data: any, callback: () => any) => {
    try {
      if (status && !isCloning) {
        updateStatus(data, callback);
      } else {
        createStatus(data, callback);
      }
      setIsCloning(false);
      getWorkStatuses();
      setShowStatusForm(false);
    } catch (e) {
      const message = getErrorMessage(e);
      showNotification(message, {
        type: "error",
      });
    }
  };

  const closeApproveDialog = React.useCallback(() => {
    setShowApproveStatusDialog(false);
  }, []);

  const approveStatus = async () => {
    try {
      await statusService.approve(Number(workId), Number(status?.id));
      setShowApproveStatusDialog(false);
      showNotification(`Status approved`, {
        type: "success",
      });
      setStatus(undefined);
      getWorkStatuses();
    } catch (e) {
      const message = getErrorMessage(e);
      showNotification(message, {
        type: "error",
      });
    }
  };

  useRouterLocationStateForHelpPage(() => WORKPLAN_TAB.STATUS.label, []);

  return (
    <StatusContext.Provider
      value={{
        setSelectedHistoryIndex,
        selectedHistoryIndex,
        isCloning,
        workId,
        setIsCloning,
        setShowStatusForm,
        setShowApproveStatusDialog,
        setStatus,
        status,
        onSave,
      }}
    >
      {children}
      <TrackDialog
        open={showStatusForm}
        dialogTitle="Add Status"
        disableEscapeKeyDown
        fullWidth
        maxWidth="sm"
        okButtonText="Save"
        formId="status-form"
        onCancel={() => onDialogClose()}
        isActionsRequired
      >
        <StatusForm />
      </TrackDialog>
      <TrackDialog
        open={showApproveStatusDialog}
        dialogTitle="Approve this Status?"
        dialogContentText="Once approved, this status will be automatically added to the Report."
        okButtonText="Approve"
        cancelButtonText="Cancel"
        isActionsRequired
        onCancel={closeApproveDialog}
        onOk={() => {
          setStatuses([]); // Status history was not being updated so manually doing this
          approveStatus();
          getWorkStatuses(); // Status history was not being updated so manually doing this
        }}
      />
    </StatusContext.Provider>
  );
};
