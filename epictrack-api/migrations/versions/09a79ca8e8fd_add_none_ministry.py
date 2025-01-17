"""Add Not applicable ministry in ministries table

Revision ID: 09a79ca8e8fd
Revises: 65cb91595d6a
Create Date: 2024-01-11 13:19:49.744798

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy import text

# revision identifiers, used by Alembic.
revision = '09a79ca8e8fd'
down_revision = '65cb91595d6a'
branch_labels = None
depends_on = None
na_ministry_name = "Not Applicable"


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###

    # check if not applicable ministry exists
    result = op.get_bind().execute(text(f"select * from ministries where name='{na_ministry_name}'")).fetchone()

    if not result:
        ministries = sa.table(
            'ministries',
            sa.Column('name', sa.String),
            sa.column('abbreviation', sa.String),
            sa.Column('is_active', sa.Boolean),
            sa.Column('is_deleted', sa.Boolean),
            sa.Column('sort_order', sa.Integer),
        )

        op.execute(
            ministries.insert().values(
                name=na_ministry_name,
                abbreviation='NA',
                is_active=True,
                is_deleted=False,
                sort_order=-1,
            )
        )

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###

    op.execute(f"delete from ministries where name='{na_ministry_name}'")

    # ### end Alembic commands ###
