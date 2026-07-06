from app.dataset.column_mapper import ColumnMapper

mapper = ColumnMapper()

columns = [

    "Customer Age",

    "Customer Gender",

    "Customer Since",

    "Revenue",

    "Support Tickets",

    "Days Late"

]

mapping = mapper.map_columns(columns)

print(mapping)