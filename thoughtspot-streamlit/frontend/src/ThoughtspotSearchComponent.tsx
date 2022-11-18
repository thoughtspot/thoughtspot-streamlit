import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
  ComponentProps
} from "streamlit-component-lib"
import {
  SearchEmbed,
  AuthType,
  init,
  prefetch,
  EmbedEvent,
  HostEvent,
  LiveboardEmbed
}
from '@thoughtspot/visual-embed-sdk';
import React, {useEffect, ReactElement, ReactNode} from "react"


interface State {
  numClicks: number
  isFocused: boolean
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */


 function ThoughtspotSearchComponent({args}: ComponentProps): ReactElement {

  let component = args["component"]

  let host = args["host"];
  let sso = Object.keys(args).includes("sso") ? args["sso"] : false
  let height = Object.keys(args).includes("height") ? args["height"] : 600
  let width = Object.keys(args).includes("width") ? args["width"] : 1000
  let dataSources = Object.keys(args).includes("datasources") ? args["datasources"] : []
  let searchString = Object.keys(args).includes("searchstring") ? args["searchstring"] : null

  let liveboardId : string = Object.keys(args).includes("liveboardid") ? args["liveboardid"] : null
  let vizId :string = Object.keys(args).includes("vizid") ? args["vizid"] : null

  Streamlit.setFrameHeight(height)

  
  init({
    thoughtSpotHost: host,
    authType: sso ? AuthType.SAML : AuthType.None,
  });

  useEffect(()=>{
    var element : any =  document.getElementById('ts-embed');

    if (component == "search"){
      const searchEmbed = new SearchEmbed(element, {
        searchOptions:{
          searchTokenString:searchString,
          executeSearch:true
        },
        dataSources: dataSources,
        frameParams: {
            width: width+"px",
            height: height+"px",
        },
      });
      searchEmbed.render()
    }else{
      const liveboardembed = new LiveboardEmbed(element, {
        liveboardId: liveboardId,
        vizId: vizId,
        frameParams: {
            width: width+"px",
            height: height+"px",
        },
      });
      liveboardembed.render()
    }

    })
    return (
      <div style={{width:width+"px",height:height+"px"}} id="ts-embed">
        TS Embed
      </div>  
    )
 }

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(ThoughtspotSearchComponent)
