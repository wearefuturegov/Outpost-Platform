🔥 NB This README is auto generated! 🔥

# Make the Outpost platform easier to adopt for other local authorities

```mermaid
%%{
init:
	{
	"theme": "base",
	"themeVariables":
		{
	      "primaryColor": "#b19f9a",
	      "primaryTextColor": "#4f3f3e",
	      "primaryBorderColor": "none",
	      "lineColor": "#4f3f3e",
	      "secondaryColor": "transparent",
	      "tertiaryColor": "transparent"
		},
	"flowchart": {
	  "curve": "linear"
        }
	}
}%%
flowchart

    classDef EasierToAdopt fill:#F69f95,stroke:none
    classDef EasierToAdoptLv2 fill:#ffd7d6,stroke:none
    classDef EasierToAdoptTasks fill:#fff,stroke:#F69f95,color:#8e7158

    %% Top level

    %% 1 Easier to adopt
    EasierToAdopt([Make the Outpost platform<br />easier to adopt for other<br />local authorities]):::EasierToAdopt
    %% 1.x Easier to adopt - second level
    RemoveRelianceOnTools([Remove reliance on specific<br />tools that other local<br />authorities might not have]):::EasierToAdoptLv2
    MakeSetupEasier([Make setup easier]):::EasierToAdoptLv2
    MakeCustomisationEasier([Make customisation easier]):::EasierToAdoptLv2
    MakeDevelopmentEasier([Make development easier]):::EasierToAdoptLv2

    ###EASIER_TO_ADOPT_TASKS###

    %% Easier to adopt
        EasierToAdopt --> RemoveRelianceOnTools --> RemoveRelianceOnToolsTasks
        EasierToAdopt --> MakeSetupEasier --> MakeSetupEasierTasks
        EasierToAdopt --> MakeCustomisationEasier --> MakeCustomisationEasierTasks
        EasierToAdopt --> MakeDevelopmentEasier --> MakeDevelopmentEasierTasks

```

# Improve data quality and ease of sharing

```mermaid
%%{
init:
	{
	"theme": "base",
	"themeVariables":
		{
	      "primaryColor": "#b19f9a",
	      "primaryTextColor": "#4f3f3e",
	      "primaryBorderColor": "none",
	      "lineColor": "#4f3f3e",
	      "secondaryColor": "transparent",
	      "tertiaryColor": "transparent"
		},
	"flowchart": {
	  "curve": "linear"
        }
	}
}%%
flowchart


    classDef ImproveDataQuality fill:#ffcc80,stroke:none
    classDef ImproveDataQualityTasks fill:#fff,stroke:#ffcc80,color:#8e7158


    %% Top level


    %% 2 Improve data quality
    ImproveDataQuality([Improve data quality and ease<br />of sharing]):::ImproveDataQuality

    ###IMPROVE_DATA_TASKS###

    ImproveDataQuality --> ImproveDataQualityTasks

```

# Improvements to Scout

```mermaid
%%{
init:
	{
	"theme": "base",
	"themeVariables":
		{
	      "primaryColor": "#b19f9a",
	      "primaryTextColor": "#4f3f3e",
	      "primaryBorderColor": "none",
	      "lineColor": "#4f3f3e",
	      "secondaryColor": "transparent",
	      "tertiaryColor": "transparent"
		},
	"flowchart": {
	  "curve": "linear"
        }
	}
}%%
flowchart


    classDef ImproveScout fill:#abcdde,stroke:none
    classDef ImproveScoutLv2 fill:#d5edf8,stroke:none
    classDef ImproveScoutTasks fill:#fff,stroke:#abcdde,color:#8e7158



    %% Top level


    %% 3 Improve scout
    ImproveScout([Improvements to Scout]):::ImproveScout
    %% 3.x Improve scout - second level
    ImproveScoutMisc([Misc]):::ImproveScoutLv2
    ImproveScoutSearch([Search]):::ImproveScoutLv2


    ###IMPROVE_SCOUT_TASKS###



    %% Improve scout
    ImproveScout --> ImproveScoutMisc --> ImproveScoutMiscTasks
    ImproveScout --> ImproveScoutSearch --> ImproveScoutSearchTasks

```

# Make Outpost a better, easier to use product

```mermaid
%%{
init:
	{
	"theme": "base",
	"themeVariables":
		{
	      "primaryColor": "#b19f9a",
	      "primaryTextColor": "#4f3f3e",
	      "primaryBorderColor": "none",
	      "lineColor": "#4f3f3e",
	      "secondaryColor": "transparent",
	      "tertiaryColor": "transparent"
		},
	"flowchart": {
	  "curve": "linear"
        }
	}
}%%
flowchart


    classDef ImproveOutpost fill:#cdbdeb,stroke:none
    classDef ImproveOutpostLv2 fill:#ded5ed,stroke:none
    classDef ImproveOutpostLv3 fill:#eae6f0,stroke:none
    classDef ImproveOutpostTasks fill:#ffff,stroke:#cdbdeb,color:#8e7158



    %% Top level


    %% 4 Improve Outpost
    ImproveOutpost([Make Outpost a better, easier<br />to use product]):::ImproveOutpost

    %% 4.x Improve Outpost - second level
    OutpostEfficientAndIntuitive([Outpost is more efficient and<br />intuitive to use]):::ImproveOutpostLv2
    NecessaryInformationInServiceListings([Service listings contain all<br />the necessary information for<br />someone to understand what it<br />is, who it's for, and how<br />it's run]):::ImproveOutpostLv2
    OrganisationsMoreDetailed([Organisations contain more detail]):::ImproveOutpostLv2
    ServiceListingsAccessible([Service listings are more<br />accessible and easy to read]):::ImproveOutpostLv2
    Quirks([Fixing quirks]):::ImproveOutpostLv2

    %% 4.x.x Improve Outpost - third level
    OutpostEfficientAndIntuitiveMisc(Misc):::ImproveOutpostLv3
    OutpostEfficientAndIntuitiveFeedback(Feedback):::ImproveOutpostLv3
    OutpostEfficientAndIntuitiveApprovals(Approvals):::ImproveOutpostLv3
    OutpostEfficientAndIntuitiveContentUpdates(Content updates):::ImproveOutpostLv3

    ###IMPROVE_OUTPOST_TASKS###





        ImproveOutpost  --> OutpostEfficientAndIntuitive
        ImproveOutpost  --> NecessaryInformationInServiceListings --> NecessaryInformationInServiceListingsTasks
        ImproveOutpost  --> OrganisationsMoreDetailed --> OrganisationsMoreDetailedTasks
        ImproveOutpost  --> ServiceListingsAccessible --> ServiceListingsAccessibleTasks
        ImproveOutpost  --> Quirks --> QuirksTasks

        OutpostEfficientAndIntuitive --> OutpostEfficientAndIntuitiveMisc --> OutpostEfficientAndIntuitiveMiscTasks
        OutpostEfficientAndIntuitive --> OutpostEfficientAndIntuitiveFeedback --> OutpostEfficientAndIntuitiveFeedbackTasks
        OutpostEfficientAndIntuitive --> OutpostEfficientAndIntuitiveApprovals --> OutpostEfficientAndIntuitiveApprovalsTasks
        OutpostEfficientAndIntuitive --> OutpostEfficientAndIntuitiveContentUpdates --> OutpostEfficientAndIntuitiveContentUpdatesTasks

```

# Problems to solve

```mermaid
%%{
init:
	{
	"theme": "base",
	"themeVariables":
		{
	      "primaryColor": "#b19f9a",
	      "primaryTextColor": "#4f3f3e",
	      "primaryBorderColor": "none",
	      "lineColor": "#4f3f3e",
	      "secondaryColor": "transparent",
	      "tertiaryColor": "transparent"
		},
	"flowchart": {
	  "curve": "linear"
        }
	}
}%%
flowchart


    classDef ProblemsToSolve fill:#d0d481,stroke:none
    classDef ProblemsToSolveTaskStyle fill:#fff,stroke:#d0d481,color:#8e7158

    %% Top level

    %% 5 Problems to solve
    ProblemsToSolve([Problems to solve]):::ProblemsToSolve

    ###PROBLEMS_TO_SOLVE_TASKS###



    %% Problems to solve
    ProblemsToSolve  --> ProblemsToSolveTasks

```
