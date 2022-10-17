import React from "react"
import ReactDOM from "react-dom"
import ThoughtspotSearchComponent from "./ThoughtspotSearchComponent"
import {
  SearchEmbed,
  AuthType,
  init,
  prefetch,
  EmbedEvent,
  HostEvent
}
from '@thoughtspot/visual-embed-sdk';

ReactDOM.render(
  <React.StrictMode>
    <ThoughtspotSearchComponent />
  </React.StrictMode>,
  document.getElementById("root")
)
