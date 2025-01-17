# Copyright © 2019 Province of British Columbia
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Model to handle all operations related to Task Event Assignees."""

import sqlalchemy as sa
from sqlalchemy.orm import relationship

from .base_model import BaseModelVersioned


class TaskEventAssignee(BaseModelVersioned):
    """Model class for Task Event Assignees."""

    __tablename__ = 'task_event_assignees'

    id = sa.Column(sa.Integer, primary_key=True, autoincrement=True)  # TODO check how it can be inherited from parent
    task_event_id = sa.Column(sa.ForeignKey('task_events.id'), nullable=False)
    assignee_id = sa.Column(sa.ForeignKey('staffs.id'), nullable=False)

    task_event = relationship('TaskEvent', foreign_keys=[task_event_id], lazy='select')
    assignee = relationship('Staff', foreign_keys=[assignee_id], lazy='select')
