"""adding column in action template and configuration

Revision ID: 0ccfa4829660
Revises: cb80bd4fe249
Create Date: 2024-03-14 11:55:04.817258

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0ccfa4829660'
down_revision = 'cb80bd4fe249'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('action_configurations', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.String(), nullable=True))

    with op.batch_alter_table('action_configurations_history', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.String(), autoincrement=False, nullable=True))

    with op.batch_alter_table('action_templates', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.String(), nullable=True))

    with op.batch_alter_table('action_templates_history', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.String(), autoincrement=False, nullable=True))

    with op.batch_alter_table('special_fields', schema=None) as batch_op:
        batch_op.create_index('entity_field_index', ['entity', 'entity_id', 'field_name', 'time_range'], unique=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('special_fields', schema=None) as batch_op:
        batch_op.drop_index('entity_field_index')

    with op.batch_alter_table('action_templates_history', schema=None) as batch_op:
        batch_op.drop_column('description')

    with op.batch_alter_table('action_templates', schema=None) as batch_op:
        batch_op.drop_column('description')

    with op.batch_alter_table('action_configurations_history', schema=None) as batch_op:
        batch_op.drop_column('description')

    with op.batch_alter_table('action_configurations', schema=None) as batch_op:
        batch_op.drop_column('description')

    # ### end Alembic commands ###
