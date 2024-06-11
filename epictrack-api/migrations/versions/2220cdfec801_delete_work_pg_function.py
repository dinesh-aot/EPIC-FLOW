"""delete work pg function

Revision ID: 2220cdfec801
Revises: 7ef1104f2a2d
Create Date: 2024-06-10 19:24:54.977231

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2220cdfec801'
down_revision = '7ef1104f2a2d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('works', schema=None) as batch_op:
        batch_op.drop_constraint('works_current_work_phase_id_fkey', type_='foreignkey')

    with op.batch_alter_table('works_history', schema=None) as batch_op:
        batch_op.drop_constraint('works_history_current_work_phase_id_fkey', type_='foreignkey')
    op.execute("""
    CREATE OR REPLACE FUNCTION delete_work(in int) returns void AS $$
        declare
            calendar_ids int[];
            event_configuration_ids int[];
        BEGIN
            delete from staff_work_roles swr  where swr.work_id = $1;
            delete from staff_work_roles_history swrh where swrh.work_id = $1;
            delete from indigenous_works iw  where iw.work_id = $1;
            delete from indigenous_works_history iwh where iwh.work_id = $1;
            delete from work_issue_updates_history wiu where wiu.work_issue_id in (select id from work_issues where work_id = $1);
            delete from work_issue_updates wiu where wiu.work_issue_id in (select id from work_issues where work_id = $1);
            delete from work_issues wi where wi.work_id = $1;
            delete from work_issues_history wih  where wih.work_id = $1;
            delete from work_statuses ws  where ws.work_id = $1;
            delete from work_statuses_history wsh  where wsh.work_id = $1;
            select array_agg(id) into event_configuration_ids from event_configurations where work_phase_id in (select id from work_phases where work_id = $1);
            delete from events_history eh where eh.event_configuration_id = any (event_configuration_ids);
            delete from events eh where eh.event_configuration_id = any (event_configuration_ids);
            select array_agg(calendar_event_id) into calendar_ids from work_calendar_events where event_configuration_id = any (event_configuration_ids);
            raise notice 'Calendar Event Ids %', calendar_ids;
            delete from work_calendar_events_history wceh where wceh.event_configuration_id = any (event_configuration_ids);
            delete from work_calendar_events wce where wce.event_configuration_id = any (event_configuration_ids);
            delete from calendar_events_history ce where ce.id = any(calendar_ids);
            delete from calendar_events ce where ce.id = any(calendar_ids);
            delete from action_configurations_history where outcome_configuration_id in (select id from outcome_configurations where event_configuration_id = any (event_configuration_ids));
            delete from action_configurations where outcome_configuration_id in (select id from outcome_configurations where event_configuration_id = any (event_configuration_ids));
            delete from outcome_configurations_history where event_configuration_id = any (event_configuration_ids);
            delete from outcome_configurations where event_configuration_id = any (event_configuration_ids);
            delete from event_configurations_history ech where ech.work_phase_id in (select id from work_phases wp where wp.work_id = $1);
            delete from event_configurations ec  where ec.work_phase_id in (select id from work_phases wp where wp.work_id = $1);
            delete from work_phases_history wph where wph.work_id = $1;
            delete from work_phases wp  where wp.work_id = $1;
            delete from works_history wh where wh.id = $1;
            delete from works where id = $1;
            raise notice 'Work with ID % has been deleted', $1;
        end;
    $$ LANGUAGE plpgsql
    """)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('works_history', schema=None) as batch_op:
        batch_op.create_foreign_key('works_history_current_work_phase_id_fkey', 'work_phases', ['current_work_phase_id'], ['id'])

    with op.batch_alter_table('works', schema=None) as batch_op:
        batch_op.create_foreign_key('works_current_work_phase_id_fkey', 'work_phases', ['current_work_phase_id'], ['id'])
    # ### end Alembic commands ###
