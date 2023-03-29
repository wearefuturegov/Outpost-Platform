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
    EasierToAdopt([Make the Outpost platform easier to adopt for other local authorities]):::EasierToAdopt
    %% 1.x Easier to adopt - second level
    RemoveRelianceOnTools([Remove reliance on specific tools that other local authorities might not have]):::EasierToAdoptLv2
    MakeSetupEasier([Make setup easier]):::EasierToAdoptLv2
    MakeCustomisationEasier([Make customisation easier]):::EasierToAdoptLv2
    MakeDevelopmentEasier([Make development easier]):::EasierToAdoptLv2

        %% 1.1~ Remove reliance on tools others may not have - tasks

    subgraph RemoveRelianceOnToolsTasks[ ]
     RemoveRelianceOnToolsTask0("Integrate Outpost services with WordPress"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/6"
     RemoveRelianceOnToolsTask1("Outpost widget"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/5"
     RemoveRelianceOnToolsTask2("Show Outpost services on any HTML site"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/4"
     RemoveRelianceOnToolsTask3("Integrate Outpost services into Drupal/LocalGov Drupal"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/3"
    end

    %% 1.2~ Make set up easier - tasks

    subgraph MakeSetupEasierTasks[ ]
     MakeSetupEasierTask0("An easier way to set-up Ofsted feed"):::EasierToAdoptTasks
     click MakeSetupEasierTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/7"
    end

    %% 1.3~ Make customisation easier - tasks

    subgraph MakeCustomisationEasierTasks[ ]
     MakeCustomisationEasierTask0("Remove theming from Scout"):::EasierToAdoptTasks
     click MakeCustomisationEasierTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/10"
     MakeCustomisationEasierTask1("Add more customisation options in scout"):::EasierToAdoptTasks
     click MakeCustomisationEasierTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/9"
     MakeCustomisationEasierTask2("Modularise Outpost to allow bespoke features"):::EasierToAdoptTasks
     click MakeCustomisationEasierTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/8"
    end

    %% 1.4~ Make development easier - tasks

    subgraph MakeDevelopmentEasierTasks[ ]
     MakeDevelopmentEasierTask1(Design System prototyping kit):::EasierToAdoptTasks
     click MakeDevelopmentEasierTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/13"
     MakeDevelopmentEasierTask1(Boilerplate for creating other apps in Outpost ecosystem ):::EasierToAdoptTasks
     click MakeDevelopmentEasierTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/12"
     MakeDevelopmentEasierTask1(Design System - HTML components):::EasierToAdoptTasks
     click MakeDevelopmentEasierTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/11"
    end



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
    ImproveDataQuality([Improve data quality and ease of sharing]):::ImproveDataQuality

        %% 2.0_ Improve data quality and ease of sharing - tasks

    subgraph ImproveDataQualityTasks[ ]
     ImproveDataQualityTask0("Enable easier sharing of data between Outpost instances"):::ImproveDataQualityTasks
     click ImproveDataQualityTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/17"
     ImproveDataQualityTask1("Support for ORUK vocabularies"):::ImproveDataQualityTasks
     click ImproveDataQualityTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/16"
     ImproveDataQualityTask2("ORUK V3 Outpost compliance"):::ImproveDataQualityTasks
     click ImproveDataQualityTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/15"
     ImproveDataQualityTask3("Easy import data from other ORUK source"):::ImproveDataQualityTasks
     click ImproveDataQualityTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/14"
    end



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


        %% 3.1~ Misc - tasks

    subgraph ImproveScoutMiscTasks[ ]
     ImproveScoutMiscTask0("Public vs. professional views for Scout"):::ImproveScoutTasks
     click ImproveScoutMiscTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/22"
     ImproveScoutMiscTask1("Authentication for Scout"):::ImproveScoutTasks
     click ImproveScoutMiscTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/21"
     ImproveScoutMiscTask2("Services can be sorted (e.g. by distance)"):::ImproveScoutTasks
     click ImproveScoutMiscTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/20"
     ImproveScoutMiscTask3("Filters to have AND logic rather than OR"):::ImproveScoutTasks
     click ImproveScoutMiscTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/19"
     ImproveScoutMiscTask4("Directory users can see second level category taxonomy when filtering"):::ImproveScoutTasks
     click ImproveScoutMiscTask4 href "https://github.com/wearefuturegov/Outpost-Platform/issues/18"
    end

    %% 3.1~ Search - tasks

    subgraph ImproveScoutMiscTasks[ ]
     ImproveScoutMiscTask0("Autocomplete text search"):::ImproveScoutTasks
     click ImproveScoutMiscTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/26"
     ImproveScoutMiscTask1("Search returns results by relevancy"):::ImproveScoutTasks
     click ImproveScoutMiscTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/25"
     ImproveScoutMiscTask2("Search can show related services"):::ImproveScoutTasks
     click ImproveScoutMiscTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/24"
     ImproveScoutMiscTask3("Search can pick up spelling errors"):::ImproveScoutTasks
     click ImproveScoutMiscTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/23"
    end





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
    ImproveOutpost([Make Outpost a better, easier to use product]):::ImproveOutpost

    %% 4.x Improve Outpost - second level
    OutpostEfficientAndIntuitive([Outpost is more efficient and intuitive to use]):::ImproveOutpostLv2
    NecessaryInformationInServiceListings([Service listings contain all the necessary information for someone to understand what it is, who it's for, and how it's run]):::ImproveOutpostLv2
    OrganisationsMoreDetailed([Organisations contain more detail]):::ImproveOutpostLv2
    ServiceListingsAccessible([Service listings are more accessible and easy to read]):::ImproveOutpostLv2
    Quirks([Fixing quirks]):::ImproveOutpostLv2

    %% 4.x.x Improve Outpost - third level
    OutpostEfficientAndIntuitiveMisc(Misc):::ImproveOutpostLv3
    OutpostEfficientAndIntuitiveFeedback(Feedback):::ImproveOutpostLv3
    OutpostEfficientAndIntuitiveApprovals(Approvals):::ImproveOutpostLv3
    OutpostEfficientAndIntuitiveContentUpdates(Content updates):::ImproveOutpostLv3

        %% 4.1~ Outpost is more efficient and intuitive - tasks

    %% 4.1.1~ Misc - tasks

    subgraph OutpostEfficientAndIntuitiveMiscTasks[ ]
     OutpostEfficientAndIntuitiveMiscTask0("Service owners are reminded to update their listings"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/36"
     OutpostEfficientAndIntuitiveMiscTask1("Service owners can belong to more than one organisation"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/35"
     OutpostEfficientAndIntuitiveMiscTask2("Passwordless log-in"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/34"
     OutpostEfficientAndIntuitiveMiscTask3("Service owners can invite colleagues to join their organisation in Outpost"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/33"
     OutpostEfficientAndIntuitiveMiscTask4("More granular roles and permissions"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask4 href "https://github.com/wearefuturegov/Outpost-Platform/issues/32"
     OutpostEfficientAndIntuitiveMiscTask5("Taxonomy dropdown typeahead"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask5 href "https://github.com/wearefuturegov/Outpost-Platform/issues/31"
     OutpostEfficientAndIntuitiveMiscTask6("Services in Outpost can be filtered by multiple taxonomy terms"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask6 href "https://github.com/wearefuturegov/Outpost-Platform/issues/30"
     OutpostEfficientAndIntuitiveMiscTask7("Services can be updated in bulk"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask7 href "https://github.com/wearefuturegov/Outpost-Platform/issues/29"
     OutpostEfficientAndIntuitiveMiscTask8("Services can be imported in bulk via the Outpost interface (developer not needed)"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask8 href "https://github.com/wearefuturegov/Outpost-Platform/issues/28"
    end

    %% 4.1.2~ Feedback - tasks

    subgraph OutpostEfficientAndIntuitiveFeedbackTasks[ ]
     OutpostEfficientAndIntuitiveFeedbackTask0("A way to acknowledge when feedback has been actioned"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveFeedbackTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/39"
     OutpostEfficientAndIntuitiveFeedbackTask1("A way to see which feedback has been addressed"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveFeedbackTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/38"
     OutpostEfficientAndIntuitiveFeedbackTask2("Encourage service providers not to use feedback to make changes to their listing"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveFeedbackTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/37"
    end

    %% 4.1.3~ Approvals - tasks

    subgraph OutpostEfficientAndIntuitiveApprovalsTasks[ ]
     OutpostEfficientAndIntuitiveApprovalsTask0("Automatic approvals"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveApprovalsTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/42"
     OutpostEfficientAndIntuitiveApprovalsTask1("Services can be approved in bulk"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveApprovalsTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/41"
     OutpostEfficientAndIntuitiveApprovalsTask2("Read-only view for admins"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveApprovalsTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/40"
    end

    %% 4.1.4~ Content updates - tasks

    subgraph OutpostEfficientAndIntuitiveContentUpdatesTasks[ ]
     OutpostEfficientAndIntuitiveContentUpdatesTask0("Labels > Add labels to group services"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/49"
     OutpostEfficientAndIntuitiveContentUpdatesTask1("Visibility > Show or hide listing"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/48"
     OutpostEfficientAndIntuitiveContentUpdatesTask2("Links > Social media links?"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/47"
     OutpostEfficientAndIntuitiveContentUpdatesTask3("Scheduling > Date and time of service"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/46"
     OutpostEfficientAndIntuitiveContentUpdatesTask4("Contacts -> Who someone should contact if they want to know more about the service"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask4 href "https://github.com/wearefuturegov/Outpost-Platform/issues/45"
     OutpostEfficientAndIntuitiveContentUpdatesTask5("Website -> website for the organisation providing the service AND website for the activity or service"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask5 href "https://github.com/wearefuturegov/Outpost-Platform/issues/44"
     OutpostEfficientAndIntuitiveContentUpdatesTask6("Parent organisation -> organisation providing the service"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask6 href "https://github.com/wearefuturegov/Outpost-Platform/issues/43"
    end

    %% 4.2~ Listings contain all necessary information - tasks

    subgraph NecessaryInformationInServiceListingsTasks[ ]
     NecessaryInformationInServiceListingsTask0("Local offer mandatory description unlinked from the filters "):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/65"
     NecessaryInformationInServiceListingsTask1("Childcare filters: does school pick up, has childcare vacancies, holiday activities, SEN inclusive"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/64"
     NecessaryInformationInServiceListingsTask2("Monday-Friday option for services that run at the same time each day"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/63"
     NecessaryInformationInServiceListingsTask3("Free text field for fee options"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/62"
     NecessaryInformationInServiceListingsTask4("Service providers can select whether their service needs a referral or not"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask4 href "https://github.com/wearefuturegov/Outpost-Platform/issues/61"
     NecessaryInformationInServiceListingsTask5("CQC information shown in a listing"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask5 href "https://github.com/wearefuturegov/Outpost-Platform/issues/60"
     NecessaryInformationInServiceListingsTask6("Services can be marked to show they begin when someone signs up (e.g. a 12-week programme)"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask6 href "https://github.com/wearefuturegov/Outpost-Platform/issues/59"
     NecessaryInformationInServiceListingsTask7("Admins can change what options are shown under SEND needs"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask7 href "https://github.com/wearefuturegov/Outpost-Platform/issues/58"
     NecessaryInformationInServiceListingsTask8("Admins can change what options are shown under accessibility"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask8 href "https://github.com/wearefuturegov/Outpost-Platform/issues/57"
     NecessaryInformationInServiceListingsTask9("Admins can change what options are shown under suitability"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask9 href "https://github.com/wearefuturegov/Outpost-Platform/issues/56"
     NecessaryInformationInServiceListingsTask10("Services that run at multiple locations can have different schedules at each one"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask10 href "https://github.com/wearefuturegov/Outpost-Platform/issues/55"
     NecessaryInformationInServiceListingsTask11("Services can be marked as being delivered online or remotely"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask11 href "https://github.com/wearefuturegov/Outpost-Platform/issues/54"
     NecessaryInformationInServiceListingsTask12("Logos, images and videos can be added to service listings"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask12 href "https://github.com/wearefuturegov/Outpost-Platform/issues/53"
     NecessaryInformationInServiceListingsTask13("Documents can be uploaded in service listings"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask13 href "https://github.com/wearefuturegov/Outpost-Platform/issues/52"
     NecessaryInformationInServiceListingsTask14("Services can occur with irregular schedules (e.g. first Monday of the month)"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask14 href "https://github.com/wearefuturegov/Outpost-Platform/issues/51"
     NecessaryInformationInServiceListingsTask15("Services can be shown as happening on a specific date"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask15 href "https://github.com/wearefuturegov/Outpost-Platform/issues/50"
    end

    %% 4.3~ Organisations contain more detail - tasks

    subgraph OrganisationsMoreDetailedTasks[ ]
     OrganisationsMoreDetailedTask0("Service owners can add additional information about an organisation (e.g. file uploads and images)"):::ImproveOutpostTasks
     click OrganisationsMoreDetailedTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/67"
     OrganisationsMoreDetailedTask1("Service owners can edit organisation information"):::ImproveOutpostTasks
     click OrganisationsMoreDetailedTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/66"
    end

    %% 4.4~ Service listings accessible and easy to read - tasks

    subgraph ServiceListingsAccessibleTasks[ ]
     ServiceListingsAccessibleTask1("Direct call to action (button) to book onto a service"):::ImproveOutpostTasks
     click ServiceListingsAccessibleTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/70"
     ServiceListingsAccessibleTask1("Spellchecker within Outpost"):::ImproveOutpostTasks
     click ServiceListingsAccessibleTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/69"
     ServiceListingsAccessibleTask1("Service descriptions can be formatted"):::ImproveOutpostTasks
     click ServiceListingsAccessibleTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/68"
    end

    %% 4.5~ Fixing quirks - tasks

    subgraph QuirksTasks[ ]
     QuirksTask1("Deduping locations"):::ImproveOutpostTasks
     click QuirksTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/71"
    end







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
    classDef ProblemsToSolveTasks fill:#fff,stroke:#d0d481,color:#8e7158

    %% Top level

    %% 5 Problems to solve
    ProblemsToSolve([Problems to solve]):::ProblemsToSolve

        %% 5 Problems to solve - tasks

    subgraph ProblemsToSolveTasks[ ]
     ProblemsToSolveTask0("Define how to rank nationwide (or county-wide) services in location based searches"):::ProblemsToSolveTasks
     click ProblemsToSolveTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/27"
    end





    %% Problems to solve
    ProblemsToSolve  --> ProblemsToSolveTasks:::ProblemsToSolveTasks

```
