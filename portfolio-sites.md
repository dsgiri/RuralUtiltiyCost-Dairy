# Rural Utility Cost Portfolio

This file serves as the canonical source of truth for the Rural Utility Cost network of applications.

| Priority | Name | Subdomain URL | GitHub Repo | Category | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | Platform | https://ruralutilitycost.com | RuralUtilityCost | Core | The main platform and master ecosystem hub. |
| 2 | Habitat | https://habitat.ruralutilitycost.com | RuralUtilityCost-Habitat | Core | Environmental habitat modeling and management. |
| 3 | Plan | https://plan.ruralutilitycost.com | RuralUtilityCost-Plan | Planning | Master planning and strategy tools. |
| 4 | Forecast | https://forecast.ruralutilitycost.com | RuralUtilityCost-Forecast | Analytics | General rural and agricultural forecasting. |
| 5 | WhatIf | https://whatif.ruralutilitycost.com | RuralUtilityCost-WhatIf | Analytics | Scenario modeling and sensitivity analysis. |
| 6 | Predictor | https://predictor.ruralutilitycost.com | RuralUtilityCost-Predictor | Analytics | Trend prediction and machine learning insights. |
| 7 | Dairy | https://dairy.ruralutilitycost.com | RuralUtilityCost-Dairy | Agriculture | Dairy economics and decision support. |
| 8 | Beef | https://beef.ruralutilitycost.com | RuralUtilityCost-Beef | Agriculture | Beef operations and profitability modeling. |
| 9 | Livestock | https://livestock.ruralutilitycost.com | RuralUtilityCost-Livestock | Agriculture | General livestock management tools. |
| 10 | Feed | https://feed.ruralutilitycost.com | RuralUtilityCost-Feed | Agriculture | Feed costs, rationing, and supply chain. |
| 11 | Pest | https://pest.ruralutilitycost.com | RuralUtilityCost-Pest | Agriculture | Pest management and mitigation planning. |
| 12 | Soil | https://soil.ruralutilitycost.com | RuralUtilityCost-Soil | Agriculture | Soil health, amendments, and sampling. |
| 13 | Aqua | https://aqua.ruralutilitycost.com | RuralUtilityCost-Aqua | Agriculture | Aquaculture economics and planning. |
| 14 | Hydroponic | https://hydroponic.ruralutilitycost.com | RuralUtilityCost-Hydroponic | Agriculture | Hydroponic yield and system modeling. |
| 15 | Greenhouse | https://greenhouse.ruralutilitycost.com | RuralUtilityCost-Greenhouse | Agriculture | Greenhouse environmental and cost modeling. |
| 16 | Land | https://land.ruralutilitycost.com | RuralUtilityCost-Land | Real Estate | Land valuation, acquisition, and utilization. |
| 17 | Price | https://price.ruralutilitycost.com | RuralUtilityCost-Price | Economics | Commodity pricing and market data. |
| 18 | Grid | https://grid.ruralutilitycost.com | RuralUtilityCost-Grid | Infrastructure | Energy grid, utility costs, and power planning. |
| 19 | Storage | https://storage.ruralutilitycost.com | RuralUtilityCost-Storage | Infrastructure | Crop, feed, and equipment storage economics. |
| 20 | Transport | https://transport.ruralutilitycost.com | RuralUtilityCost-Transport | Infrastructure | Freight, logistics, and supply chain tracking. |
| 21 | Weather | https://weather.ruralutilitycost.com | RuralUtilityCost-Weather | Environment | Micro-climate weather forecasting and alerts. |
| 22 | Carbon | https://carbon.ruralutilitycost.com | RuralUtilityCost-Carbon | Environment | Carbon credit, sequestration, and footprint modeling. |
| 23 | Quality | https://quality.ruralutilitycost.com | RuralUtilityCost-Quality | Compliance | Compliance, water quality, and standards monitoring. |
| 24 | USDA | https://usda.ruralutilitycost.com | RuralUtilityCost-USDA | Government | USDA program integration and compliance. |
| 25 | Solve | https://solve.ruralutilitycost.com | RuralUtilityCost-Solve | Utilities | Quick-solve calculators and ad-hoc utility tools. |
| 26 | BreakTime | https://breaktime.ruralutilitycost.com | RuralUtilityCost-BreakTime | Community | Community breaks, forums, and casual networking. |

## Maintenance Notes
- **To add a site:** Append a new row to the table matching the format `| Priority | Name | Subdomain URL | Repo | Category | Description |`.
- **To retire a site:** Do not delete it. Change its Category to `Retired` or add `(Retired)` to its description.
- **Single Source of Truth:** Do not duplicate domain lists in React components. The parser (`src/data/portfolio-parser.ts`) reads this file directly.
