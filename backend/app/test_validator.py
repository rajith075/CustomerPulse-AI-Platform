from pathlib import Path

from app.dataset.validator import DatasetValidator

validator = DatasetValidator()

report = validator.validate(

    Path(
        "workspaces/YOUR_PROJECT_ID/original.csv"
    )

)

print(report)