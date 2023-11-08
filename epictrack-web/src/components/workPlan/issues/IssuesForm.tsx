import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, FormControlLabel, Grid, Stack, Tooltip } from "@mui/material";
import ControlledTextField from "../../shared/controlledInputComponents/ControlledTextField";
import { ETFormLabelWithCharacterLimit, ETParagraph } from "../../shared";
import ControlledSwitch from "../../shared/controlledInputComponents/ControlledSwitch";
import { IssuesContext } from "./IssuesContext";
import { IconProps } from "../../icons/type";
import Icons from "../../icons";
import { IssueForm } from "./types";
import { is } from "immutable";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  is_active: yup.boolean(),
  is_high_priority: yup.boolean(),
  start_date: yup.string().required("Start date is required"),
  expected_resolution_date: yup.string(),
});
const InfoIcon: React.FC<IconProps> = Icons["InfoIcon"];

const IssuesForm = () => {
  const { setShowIssuesForm, issueToEdit, addIssue } =
    React.useContext(IssuesContext);

  const methods = useForm<IssueForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      is_active: true,
      is_high_priority: false,
      start_date: "",
      expected_resolution_date: "",
    },
    mode: "onSubmit",
  });

  const { handleSubmit, watch, reset } = methods;

  useEffect(() => {
    if (issueToEdit) {
      const latestUpdate =
        issueToEdit.updates?.[issueToEdit.updates.length - 1];
      reset({
        title: issueToEdit.title,
        description: latestUpdate?.description,
        is_active: issueToEdit.is_active,
        is_high_priority: issueToEdit.is_high_priority,
        start_date: issueToEdit.start_date,
        expected_resolution_date: issueToEdit.expected_resolution_date,
      });
    }
  }, [issueToEdit]);

  const watchedTitle = watch("title");
  const titleCharacterLimit = 50;
  const watchedDescription = watch("description");
  const descriptionCharacterLimit = 250;

  const onSubmitHandler = async (data: IssueForm) => {
    setShowIssuesForm(false);
    const {
      title,
      description,
      start_date,
      expected_resolution_date,
      is_active,
      is_high_priority,
    } = await schema.validate(data);

    addIssue({
      title,
      description,
      start_date,
      expected_resolution_date: expected_resolution_date || "",
      is_active: Boolean(is_active),
      is_high_priority: Boolean(is_high_priority),
    });
  };

  return (
    <FormProvider {...methods}>
      <Grid
        component={"form"}
        id="issue-form"
        spacing={2}
        container
        sx={{
          width: "100%",
        }}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <Grid item xs={12}>
          <ETFormLabelWithCharacterLimit
            characterCount={watchedTitle.length}
            maxCharacterLength={titleCharacterLimit}
          >
            Title
          </ETFormLabelWithCharacterLimit>
          <ControlledTextField
            name="title"
            fullWidth
            size="small"
            inputProps={{
              maxLength: titleCharacterLimit,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <ETFormLabelWithCharacterLimit
            characterCount={watchedDescription.length}
            maxCharacterLength={descriptionCharacterLimit}
          >
            Description
          </ETFormLabelWithCharacterLimit>
          <ControlledTextField
            name="description"
            fullWidth
            size="small"
            inputProps={{
              maxLength: descriptionCharacterLimit,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <FormControlLabel
              control={<ControlledSwitch name="is_active" />}
              label={
                <Stack direction="row" spacing={1}>
                  <ETParagraph>Active</ETParagraph>
                  <Tooltip title="Issue must be active to appear on reports">
                    <Box component={"span"}>
                      <InfoIcon />
                    </Box>
                  </Tooltip>
                </Stack>
              }
            />
            <FormControlLabel
              control={<ControlledSwitch name="is_high_priority" />}
              label={
                <Stack direction="row" spacing={1}>
                  <ETParagraph>High Priority</ETParagraph>
                  <Tooltip title="Issue must be High Priority to appear on 30-60-90">
                    <Box component={"span"}>
                      <InfoIcon />
                    </Box>
                  </Tooltip>
                </Stack>
              }
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <ETParagraph bold>Start Date</ETParagraph>
          <ControlledTextField
            name="start_date"
            fullWidth
            size="small"
            type="date"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <ETParagraph bold>Expected Resolution Date</ETParagraph>
          <ControlledTextField
            name="expected_resolution_date"
            fullWidth
            size="small"
            type="date"
          />
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default IssuesForm;