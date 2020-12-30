# Trigger a either a manual or release job from a webhook

Call a webhook to trigger a pipeline run for a release, or trigger a normal run to get a quick env check.


**Base URL** : `https://git.nonprod.williamhill.plc`

**URL** : `/api/v4/projects/15559/trigger/pipeline`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Valid Form Fields**
```bash
    # Not all these fields are required in the curl. Examples for each are below.
    -F token=1a96b8549f735656092a05d03a3d48
    -F "ref=<branch>"
    -F "variables[STATE]=<STATE>"
    -F "variables[TAG]='@<tag>'"                                                             
    -F "variables[ENVIRONMENT]=<ENVIRONMENT>"
    -F "variables[RELEASE]=true"                                                                                 
    -F "variables[RELEASE_CORE]=true"
    -F "variables[RELEASE_BETS]=true"
    -F "variables[RELEASE_SCE]=true"
    -F "variables[RELEASE_SCI]=true"
```

**Supported Tags**
|Tag        | Description             |
|:---------:|---------------------|
| @core     | Runs event/market creation and verifies propogation into PDS and SB API. Also runs DSM healthcheck        |
| @bets     | Runs account creation and bet placement test using predefined permanent events set in BE                  |
| @sc       | Runs sports catalog internal tests validating event/market/selection creation and other SC features      |


## Manual Pipeline Trigger vs. Release Trigger
There are two types of jobs which can be triggered depending on if a release form entry is provided. For daily development purposes or quickly checking on the health of an env, use the Manual Pipeline Trigger. The 2nd is the Release Trigger which should only be used when called from the deployment tracker on a successful deployment.

**Example of triggering a testpack which will be coupled to a recent deployment**
> Release triggers are ONLY supported in USC until env stability is improved in lower envs.
```bash
curl -X POST \
  -F token=1a96b8549f735656092a05d03a3d48 \        
  -F "ref=add-dps-trigger" \                          
  -F "variables[STATE]=NJ" \               
  -F "variables[RELEASE]=true" \                                                                                         
  -F "variables[RELEASE_CORE]=true" \
  -F "variables[RELEASE_BETS]=true" \  
  https://git.nonprod.williamhill.plc/api/v4/projects/15559/trigger/pipeline
```

