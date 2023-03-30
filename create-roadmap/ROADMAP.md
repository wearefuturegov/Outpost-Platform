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

        %% 1.1~ Remove reliance on tools others may not have - tasks

    subgraph RemoveRelianceOnToolsTasks[ ]
     RemoveRelianceOnToolsTask0("Create a Drupal module to<br />embed standalone Scout<br />"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/85"
     RemoveRelianceOnToolsTask1("Scout is a standalone package<br />that can be displayed on any<br />website<br />"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/84"
     RemoveRelianceOnToolsTask2("Outpost can be hosted on any<br />hosting platform<br />"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/83"
     RemoveRelianceOnToolsTask3("Remove reliance on file<br />upload providers<br />"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/82"
     RemoveRelianceOnToolsTask4("Integrate Outpost services<br />with WordPress<br />"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask4 href "https://github.com/wearefuturegov/Outpost-Platform/issues/6"
     RemoveRelianceOnToolsTask5("Outpost widget<br />"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask5 href "https://github.com/wearefuturegov/Outpost-Platform/issues/5"
     RemoveRelianceOnToolsTask6("Show Outpost services on any<br />HTML site<br />"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask6 href "https://github.com/wearefuturegov/Outpost-Platform/issues/4"
     RemoveRelianceOnToolsTask7("Integrate Outpost services<br />into Drupal/LocalGov Drupal<br />"):::EasierToAdoptTasks
     click RemoveRelianceOnToolsTask7 href "https://github.com/wearefuturegov/Outpost-Platform/issues/3"
    end

    %% 1.2~ Make set up easier - tasks

    subgraph MakeSetupEasierTasks[ ]
     MakeSetupEasierTask0("Exploring how to make data<br />imports easier from Open<br />Objects<br />"):::EasierToAdoptTasks
     click MakeSetupEasierTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/86"
     MakeSetupEasierTask1(" Make Ofsted feed more easily<br />reusable (An easier way to<br />set-up Ofsted feed)<br />"):::EasierToAdoptTasks
     click MakeSetupEasierTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/7"
    end

    %% 1.3~ Make customisation easier - tasks

    subgraph MakeCustomisationEasierTasks[ ]
     MakeCustomisationEasierTask0("Remove theming from Scout<br />"):::EasierToAdoptTasks
     click MakeCustomisationEasierTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/10"
     MakeCustomisationEasierTask1("Add more customisation<br />options in scout<br />"):::EasierToAdoptTasks
     click MakeCustomisationEasierTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/9"
     MakeCustomisationEasierTask2("Modularise Outpost to allow<br />bespoke features<br />"):::EasierToAdoptTasks
     click MakeCustomisationEasierTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/8"
    end

    %% 1.4~ Make development easier - tasks

    subgraph MakeDevelopmentEasierTasks[ ]
     MakeDevelopmentEasierTask0(Design System prototyping kit):::EasierToAdoptTasks
     click MakeDevelopmentEasierTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/13"
     MakeDevelopmentEasierTask1(Boilerplate for creating other apps in Outpost ecosystem ):::EasierToAdoptTasks
     click MakeDevelopmentEasierTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/12"
     MakeDevelopmentEasierTask2(Design System - HTML components):::EasierToAdoptTasks
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
    ImproveDataQuality([Improve data quality and ease<br />of sharing]):::ImproveDataQuality

        %% 2.0_ Improve data quality and ease of sharing - tasks

    subgraph ImproveDataQualityTasks[ ]
     ImproveDataQualityTask0("Enable easier sharing of data<br />between Outpost instances<br />"):::ImproveDataQualityTasks
     click ImproveDataQualityTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/17"
     ImproveDataQualityTask1("Support for ORUK vocabularies<br />"):::ImproveDataQualityTasks
     click ImproveDataQualityTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/16"
     ImproveDataQualityTask2("ORUK V3 Outpost compliance<br />"):::ImproveDataQualityTasks
     click ImproveDataQualityTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/15"
     ImproveDataQualityTask3("Easy import data from other<br />ORUK source<br />"):::ImproveDataQualityTasks
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
     ImproveScoutMiscTask0("Public vs. professional views<br />for Scout<br />"):::ImproveScoutTasks
     click ImproveScoutMiscTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/22"
     ImproveScoutMiscTask1("Authentication for Scout<br />"):::ImproveScoutTasks
     click ImproveScoutMiscTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/21"
     ImproveScoutMiscTask2("Services can be sorted (e.g.<br />by distance)<br />"):::ImproveScoutTasks
     click ImproveScoutMiscTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/20"
     ImproveScoutMiscTask3("Filters to have AND logic<br />rather than OR<br />"):::ImproveScoutTasks
     click ImproveScoutMiscTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/19"
     ImproveScoutMiscTask4("Directory users can see<br />second level category<br />taxonomy when filtering<br />"):::ImproveScoutTasks
     click ImproveScoutMiscTask4 href "https://github.com/wearefuturegov/Outpost-Platform/issues/18"
    end

    %% 3.2~ Search - tasks

    subgraph ImproveScoutSearchTasks[ ]
     ImproveScoutSearchTask0("Autocomplete text search<br />"):::ImproveScoutTasks
     click ImproveScoutSearchTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/26"
     ImproveScoutSearchTask1("Search returns results by<br />relevancy<br />"):::ImproveScoutTasks
     click ImproveScoutSearchTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/25"
     ImproveScoutSearchTask2("Search can show related<br />services<br />"):::ImproveScoutTasks
     click ImproveScoutSearchTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/24"
     ImproveScoutSearchTask3("Search can pick up spelling<br />errors<br />"):::ImproveScoutTasks
     click ImproveScoutSearchTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/23"
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

        %% 4.1~ Outpost is more efficient and intuitive - tasks

    %% 4.1.1~ Misc - tasks

    subgraph OutpostEfficientAndIntuitiveMiscTasks[ ]
     OutpostEfficientAndIntuitiveMiscTask0("Service owners are reminded<br />to update their listings<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/36"
     OutpostEfficientAndIntuitiveMiscTask1("Service owners can belong to<br />more than one organisation<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/35"
     OutpostEfficientAndIntuitiveMiscTask2("Passwordless log-in<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/34"
     OutpostEfficientAndIntuitiveMiscTask3("Service owners can invite<br />colleagues to join their<br />organisation in Outpost<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/33"
     OutpostEfficientAndIntuitiveMiscTask4("More granular roles and<br />permissions<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask4 href "https://github.com/wearefuturegov/Outpost-Platform/issues/32"
     OutpostEfficientAndIntuitiveMiscTask5("Taxonomy dropdown typeahead<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask5 href "https://github.com/wearefuturegov/Outpost-Platform/issues/31"
     OutpostEfficientAndIntuitiveMiscTask6("Services in Outpost can be<br />filtered by multiple taxonomy<br />terms<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask6 href "https://github.com/wearefuturegov/Outpost-Platform/issues/30"
     OutpostEfficientAndIntuitiveMiscTask7("Services can be updated in<br />bulk<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask7 href "https://github.com/wearefuturegov/Outpost-Platform/issues/29"
     OutpostEfficientAndIntuitiveMiscTask8("Services can be imported in<br />bulk via the Outpost<br />interface (developer not<br />needed)<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveMiscTask8 href "https://github.com/wearefuturegov/Outpost-Platform/issues/28"
    end

    %% 4.1.2~ Feedback - tasks

    subgraph OutpostEfficientAndIntuitiveFeedbackTasks[ ]
     OutpostEfficientAndIntuitiveFeedbackTask0("A way to acknowledge when<br />feedback has been actioned<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveFeedbackTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/39"
     OutpostEfficientAndIntuitiveFeedbackTask1("A way to see which feedback<br />has been addressed<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveFeedbackTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/38"
     OutpostEfficientAndIntuitiveFeedbackTask2("Encourage service providers<br />not to use feedback to make<br />changes to their listing<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveFeedbackTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/37"
    end

    %% 4.1.3~ Approvals - tasks

    subgraph OutpostEfficientAndIntuitiveApprovalsTasks[ ]
     OutpostEfficientAndIntuitiveApprovalsTask0("Automatic approvals<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveApprovalsTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/42"
     OutpostEfficientAndIntuitiveApprovalsTask1("Services can be approved in<br />bulk<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveApprovalsTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/41"
     OutpostEfficientAndIntuitiveApprovalsTask2("Read-only view for admins<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveApprovalsTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/40"
    end

    %% 4.1.4~ Content updates - tasks

    subgraph OutpostEfficientAndIntuitiveContentUpdatesTasks[ ]
     OutpostEfficientAndIntuitiveContentUpdatesTask0("Labels > Add labels to group<br />services<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/49"
     OutpostEfficientAndIntuitiveContentUpdatesTask1("Visibility > Show or hide<br />listing<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/48"
     OutpostEfficientAndIntuitiveContentUpdatesTask2("Links > Social media links?<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/47"
     OutpostEfficientAndIntuitiveContentUpdatesTask3("Scheduling > Date and time of<br />service<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/46"
     OutpostEfficientAndIntuitiveContentUpdatesTask4("Contacts -> Who someone<br />should contact if they want<br />to know more about the<br />service<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask4 href "https://github.com/wearefuturegov/Outpost-Platform/issues/45"
     OutpostEfficientAndIntuitiveContentUpdatesTask5("Website -> website for the<br />organisation providing the<br />service AND website for the<br />activity or service<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask5 href "https://github.com/wearefuturegov/Outpost-Platform/issues/44"
     OutpostEfficientAndIntuitiveContentUpdatesTask6("Parent organisation -><br />organisation providing the<br />service<br />"):::ImproveOutpostTasks
     click OutpostEfficientAndIntuitiveContentUpdatesTask6 href "https://github.com/wearefuturegov/Outpost-Platform/issues/43"
    end

    %% 4.2~ Listings contain all necessary information - tasks

    subgraph NecessaryInformationInServiceListingsTasks[ ]
     NecessaryInformationInServiceListingsTask0("Local offer mandatory<br />description unlinked from the<br />filters <br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/65"
     NecessaryInformationInServiceListingsTask1("Childcare filters: does<br />school pick up, has childcare<br />vacancies, holiday<br />activities, SEN inclusive<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/64"
     NecessaryInformationInServiceListingsTask2("Monday-Friday option for<br />services that run at the same<br />time each day<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/63"
     NecessaryInformationInServiceListingsTask3("Free text field for fee<br />options<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask3 href "https://github.com/wearefuturegov/Outpost-Platform/issues/62"
     NecessaryInformationInServiceListingsTask4("Service providers can select<br />whether their service needs a<br />referral or not<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask4 href "https://github.com/wearefuturegov/Outpost-Platform/issues/61"
     NecessaryInformationInServiceListingsTask5("CQC information shown in a<br />listing<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask5 href "https://github.com/wearefuturegov/Outpost-Platform/issues/60"
     NecessaryInformationInServiceListingsTask6("Services can be marked to<br />show they begin when someone<br />signs up (e.g. a 12-week<br />programme)<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask6 href "https://github.com/wearefuturegov/Outpost-Platform/issues/59"
     NecessaryInformationInServiceListingsTask7("Admins can change what<br />options are shown under SEND<br />needs<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask7 href "https://github.com/wearefuturegov/Outpost-Platform/issues/58"
     NecessaryInformationInServiceListingsTask8("Admins can change what<br />options are shown under<br />accessibility<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask8 href "https://github.com/wearefuturegov/Outpost-Platform/issues/57"
     NecessaryInformationInServiceListingsTask9("Admins can change what<br />options are shown under<br />suitability<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask9 href "https://github.com/wearefuturegov/Outpost-Platform/issues/56"
     NecessaryInformationInServiceListingsTask10("Services that run at multiple<br />locations can have different<br />schedules at each one<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask10 href "https://github.com/wearefuturegov/Outpost-Platform/issues/55"
     NecessaryInformationInServiceListingsTask11("Services can be marked as<br />being delivered online or<br />remotely<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask11 href "https://github.com/wearefuturegov/Outpost-Platform/issues/54"
     NecessaryInformationInServiceListingsTask12("Logos, images and videos can<br />be added to service listings<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask12 href "https://github.com/wearefuturegov/Outpost-Platform/issues/53"
     NecessaryInformationInServiceListingsTask13("Documents can be uploaded in<br />service listings<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask13 href "https://github.com/wearefuturegov/Outpost-Platform/issues/52"
     NecessaryInformationInServiceListingsTask14("Services can occur with<br />irregular schedules (e.g.<br />first Monday of the month)<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask14 href "https://github.com/wearefuturegov/Outpost-Platform/issues/51"
     NecessaryInformationInServiceListingsTask15("Services can be shown as<br />happening on a specific date<br />"):::ImproveOutpostTasks
     click NecessaryInformationInServiceListingsTask15 href "https://github.com/wearefuturegov/Outpost-Platform/issues/50"
    end

    %% 4.3~ Organisations contain more detail - tasks

    subgraph OrganisationsMoreDetailedTasks[ ]
     OrganisationsMoreDetailedTask0("Service owners can add<br />additional information about<br />an organisation (e.g. file<br />uploads and images)<br />"):::ImproveOutpostTasks
     click OrganisationsMoreDetailedTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/67"
     OrganisationsMoreDetailedTask1("Service owners can edit<br />organisation information<br />"):::ImproveOutpostTasks
     click OrganisationsMoreDetailedTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/66"
    end

    %% 4.4~ Service listings accessible and easy to read - tasks

    subgraph ServiceListingsAccessibleTasks[ ]
     ServiceListingsAccessibleTask0("Direct call to action<br />(button) to book onto a<br />service<br />"):::ImproveOutpostTasks
     click ServiceListingsAccessibleTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/70"
     ServiceListingsAccessibleTask1("Spellchecker within Outpost<br />"):::ImproveOutpostTasks
     click ServiceListingsAccessibleTask1 href "https://github.com/wearefuturegov/Outpost-Platform/issues/69"
     ServiceListingsAccessibleTask2("Service descriptions can be<br />formatted<br />"):::ImproveOutpostTasks
     click ServiceListingsAccessibleTask2 href "https://github.com/wearefuturegov/Outpost-Platform/issues/68"
    end

    %% 4.5~ Fixing quirks - tasks

    subgraph QuirksTasks[ ]
     QuirksTask0("Deduping locations<br />"):::ImproveOutpostTasks
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
    classDef ProblemsToSolveTasksStyle fill:#fff,stroke:#d0d481,color:#8e7158

    %% Top level

    %% 5 Problems to solve
    ProblemsToSolve([Problems to solve]):::ProblemsToSolve

        %% 5 Problems to solve - tasks

    subgraph ProblemsToSolveTasks[ ]
     ProblemsToSolveTask0("Define how to rank nationwide<br />(or county-wide) services in<br />location based searches<br />"):::ProblemsToSolveTasksStyle
     click ProblemsToSolveTask0 href "https://github.com/wearefuturegov/Outpost-Platform/issues/27"
    end





    %% Problems to solve
    ProblemsToSolve  --> ProblemsToSolveTasks

```


# 🧠 Mindmap

```mermaid
%%{
init:
	{
  "theme": "neutral"
  }
}%%
mindmap
  root[Outpost Platform]
    EasierToAdopt[Make the Outpost platform<br />easier to adopt for other<br />local authorities]
    :::EasierToAdopt
        RemoveRelianceOnTools[Remove reliance on specific<br />tools that other local<br />authorities might not have]
        :::EasierToAdoptLv2
            RemoveRelianceOnToolsTask0("Create a Drupal module to<br />embed standalone Scout<br />")
            :::EasierToAdoptTasks
            RemoveRelianceOnToolsTask1("Scout is a standalone package<br />that can be displayed on any<br />website<br />")
            :::EasierToAdoptTasks
            RemoveRelianceOnToolsTask2("Outpost can be hosted on any<br />hosting platform<br />")
            :::EasierToAdoptTasks
            RemoveRelianceOnToolsTask3("Remove reliance on file<br />upload providers<br />")
            :::EasierToAdoptTasks
            RemoveRelianceOnToolsTask4("Integrate Outpost services<br />with WordPress<br />")
            :::EasierToAdoptTasks
            RemoveRelianceOnToolsTask5("Outpost widget<br />")
            :::EasierToAdoptTasks
            RemoveRelianceOnToolsTask6("Show Outpost services on any<br />HTML site<br />")
            :::EasierToAdoptTasks
            RemoveRelianceOnToolsTask7("Integrate Outpost services<br />into Drupal/LocalGov Drupal<br />")
            :::EasierToAdoptTasks
        MakeSetupEasier[Make setup easier]
        :::EasierToAdoptLv2
            MakeSetupEasierTask0("Exploring how to make data<br />imports easier from Open<br />Objects<br />")
            :::EasierToAdoptTasks
            MakeSetupEasierTask1(" Make Ofsted feed more easily<br />reusable (An easier way to<br />set-up Ofsted feed)<br />")
            :::EasierToAdoptTasks
        MakeCustomisationEasier[Make customisation easier]
        :::EasierToAdoptLv2
            MakeCustomisationEasierTask0("Remove theming from Scout<br />")
            :::EasierToAdoptTasks
            MakeCustomisationEasierTask1("Add more customisation<br />options in scout<br />")
            :::EasierToAdoptTasks
            MakeCustomisationEasierTask2("Modularise Outpost to allow<br />bespoke features<br />")
            :::EasierToAdoptTasks
        MakeDevelopmentEasier[Make development easier]
        :::EasierToAdoptLv2
            MakeDevelopmentEasierTask0(Design System prototyping kit)
            :::EasierToAdoptTasks
            MakeDevelopmentEasierTask1(Boilerplate for creating other apps in Outpost ecosystem )
            :::EasierToAdoptTasks
            MakeDevelopmentEasierTask2(Design System - HTML components)
            :::EasierToAdoptTasks

    ImproveDataQuality[Improve data quality and ease<br />of sharing]
    :::ImproveDataQuality
        ImproveDataQualityTask0("Enable easier sharing of data<br />between Outpost instances<br />")
        :::ImproveDataQualityTasks
        ImproveDataQualityTask1("Support for ORUK vocabularies<br />")
        :::ImproveDataQualityTasks
        ImproveDataQualityTask2("ORUK V3 Outpost compliance<br />")
        :::ImproveDataQualityTasks
        ImproveDataQualityTask3("Easy import data from other<br />ORUK source<br />")
        :::ImproveDataQualityTasks

    ImproveScout[Improvements to Scout]
    :::ImproveScout
        ImproveScoutMisc[Misc]
        :::ImproveScoutLv2
            ImproveScoutMiscTask0("Public vs. professional views<br />for Scout<br />")
            :::ImproveScoutTasks
            ImproveScoutMiscTask1("Authentication for Scout<br />")
            :::ImproveScoutTasks
            ImproveScoutMiscTask2("Services can be sorted (e.g.<br />by distance)<br />")
            :::ImproveScoutTasks
            ImproveScoutMiscTask3("Filters to have AND logic<br />rather than OR<br />")
            :::ImproveScoutTasks
            ImproveScoutMiscTask4("Directory users can see<br />second level category<br />taxonomy when filtering<br />")
            :::ImproveScoutTasks
        ImproveScoutSearch[Search]
        :::ImproveScoutLv2
            ImproveScoutSearchTask0("Autocomplete text search<br />")
            :::ImproveScoutTasks
            ImproveScoutSearchTask1("Search returns results by<br />relevancy<br />")
            :::ImproveScoutTasks
            ImproveScoutSearchTask2("Search can show related<br />services<br />")
            :::ImproveScoutTasks
            ImproveScoutSearchTask3("Search can pick up spelling<br />errors<br />")
            :::ImproveScoutTasks

    ImproveOutpost[Make Outpost a better, easier<br />to use product]
    :::ImproveOutpost
        OutpostEfficientAndIntuitive[Outpost is more efficient and<br />intuitive to use]
        :::ImproveOutpostLv2
            OutpostEfficientAndIntuitiveMisc[Misc]
            :::ImproveOutpostLv3
                OutpostEfficientAndIntuitiveMiscTask0("Service owners are reminded<br />to update their listings<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveMiscTask1("Service owners can belong to<br />more than one organisation<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveMiscTask2("Passwordless log-in<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveMiscTask3("Service owners can invite<br />colleagues to join their<br />organisation in Outpost<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveMiscTask4("More granular roles and<br />permissions<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveMiscTask5("Taxonomy dropdown typeahead<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveMiscTask6("Services in Outpost can be<br />filtered by multiple taxonomy<br />terms<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveMiscTask7("Services can be updated in<br />bulk<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveMiscTask8("Services can be imported in<br />bulk via the Outpost<br />interface (developer not<br />needed)<br />")
                :::ImproveOutpostTasks
        OutpostEfficientAndIntuitive[Outpost is more efficient and<br />intuitive to use]
        :::ImproveOutpostLv2
            OutpostEfficientAndIntuitiveFeedback[Misc]
            :::ImproveOutpostLv3
                OutpostEfficientAndIntuitiveFeedbackTask0("A way to acknowledge when<br />feedback has been actioned<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveFeedbackTask1("A way to see which feedback<br />has been addressed<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveFeedbackTask2("Encourage service providers<br />not to use feedback to make<br />changes to their listing<br />")
                :::ImproveOutpostTasks
        OutpostEfficientAndIntuitive[Outpost is more efficient and<br />intuitive to use]
        :::ImproveOutpostLv2
            OutpostEfficientAndIntuitiveApprovals[Misc]
            :::ImproveOutpostLv3
                OutpostEfficientAndIntuitiveApprovalsTask0("Automatic approvals<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveApprovalsTask1("Services can be approved in<br />bulk<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveApprovalsTask2("Read-only view for admins<br />")
                :::ImproveOutpostTasks
        OutpostEfficientAndIntuitive[Outpost is more efficient and<br />intuitive to use]
        :::ImproveOutpostLv2
            OutpostEfficientAndIntuitiveContentUpdates[Misc]
            :::ImproveOutpostLv3
                OutpostEfficientAndIntuitiveContentUpdatesTask0("Labels > Add labels to group<br />services<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveContentUpdatesTask1("Visibility > Show or hide<br />listing<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveContentUpdatesTask2("Links > Social media links?<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveContentUpdatesTask3("Scheduling > Date and time of<br />service<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveContentUpdatesTask4("Contacts -> Who someone<br />should contact if they want<br />to know more about the<br />service<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveContentUpdatesTask5("Website -> website for the<br />organisation providing the<br />service AND website for the<br />activity or service<br />")
                :::ImproveOutpostTasks
                OutpostEfficientAndIntuitiveContentUpdatesTask6("Parent organisation -><br />organisation providing the<br />service<br />")
                :::ImproveOutpostTasks
        NecessaryInformationInServiceListings[Service listings contain all<br />the necessary information for<br />someone to understand what it<br />is, who it's for, and how<br />it's run]
        :::ImproveOutpostLv2
            NecessaryInformationInServiceListingsTask0("Local offer mandatory<br />description unlinked from the<br />filters <br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask1("Childcare filters: does<br />school pick up, has childcare<br />vacancies, holiday<br />activities, SEN inclusive<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask2("Monday-Friday option for<br />services that run at the same<br />time each day<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask3("Free text field for fee<br />options<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask4("Service providers can select<br />whether their service needs a<br />referral or not<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask5("CQC information shown in a<br />listing<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask6("Services can be marked to<br />show they begin when someone<br />signs up (e.g. a 12-week<br />programme)<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask7("Admins can change what<br />options are shown under SEND<br />needs<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask8("Admins can change what<br />options are shown under<br />accessibility<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask9("Admins can change what<br />options are shown under<br />suitability<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask10("Services that run at multiple<br />locations can have different<br />schedules at each one<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask11("Services can be marked as<br />being delivered online or<br />remotely<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask12("Logos, images and videos can<br />be added to service listings<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask13("Documents can be uploaded in<br />service listings<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask14("Services can occur with<br />irregular schedules (e.g.<br />first Monday of the month)<br />")
            :::ImproveOutpostTasks
            NecessaryInformationInServiceListingsTask15("Services can be shown as<br />happening on a specific date<br />")
            :::ImproveOutpostTasks
        OrganisationsMoreDetailed[Organisations contain more detail]
        :::ImproveOutpostLv2
            OrganisationsMoreDetailedTask0("Service owners can add<br />additional information about<br />an organisation (e.g. file<br />uploads and images)<br />")
            :::ImproveOutpostTasks
            OrganisationsMoreDetailedTask1("Service owners can edit<br />organisation information<br />")
            :::ImproveOutpostTasks
        ServiceListingsAccessible[Service listings are more<br />accessible and easy to read]
        :::ImproveOutpostLv2
            ServiceListingsAccessibleTask0("Direct call to action<br />(button) to book onto a<br />service<br />")
            :::ImproveOutpostTasks
            ServiceListingsAccessibleTask1("Spellchecker within Outpost<br />")
            :::ImproveOutpostTasks
            ServiceListingsAccessibleTask2("Service descriptions can be<br />formatted<br />")
            :::ImproveOutpostTasks
        Quirks[Fixing quirks]
        :::ImproveOutpostLv2
            QuirksTask0("Deduping locations<br />")
            :::ImproveOutpostTasks

    ProblemsToSolve[Problems to solve]
    :::ProblemsToSolve
        ProblemsToSolveTask0("Define how to rank nationwide<br />(or county-wide) services in<br />location based searches<br />")
        :::ProblemsToSolveTasksStyle

```
