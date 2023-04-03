## Streamlit - Thoughtspot component

A Streamlit component that renders a ThoughtSpot liveboard, or search, leveraging the ThoughtSpot Visual Embed SDK.


### Install with pip

You can use pip to install the pre-built wheel file.

``` pip install dist/streamlit_thoughtspot-0.0.1-py3-none-any.whl ```

You can then import the streamlit_thoughtspot package into your streamlit project.
``` import streamlit_thoughtspot ```

**Note** that this does not implement authentication. If you want to implement a more complex logic, we suggest building the package yourself.

### Rendering a Livebaord
To render a Liveboard Embed, call the `thoughtspot_liveboard_component` function.

| host | string | URL of your ThoughtSpot environment. |
| width | number | width |
| height | number | height |
| liveboardid | string | UUID of the ThoughtSpot liveboard to be rendered |


```
streamlit_thoughtspot.thoughtspot_liveboard_component(
    host=thoughtspot_host,
    width=1400,
    height=1100,
    liveboardid="My Liveboard UUID"
    )
```


### Rendering a Search Component

To render a Search Embed, call the `thoughtspot_liveboard_component` function.

| host | string | URL of your ThoughtSpot environment. |
| width | number | width |
| height | number | height |
| answerid | string | UUID of the ThoughtSpot answer to be rendered. If not provided, a standard search will appear |
| dataSources | array of strings | UUIDs of the ThoughtSpot datasources that will be visible |
| searchString | string | If no answer Id is provided, this search token string will be the default search executed.|

```
streamlit_thoughtspot.thoughtspot_search_component(
    host=thoughtspot_host,
    width=1400,
    height=900,
    answerid='My answer UUID'
    )
```





### Build the component from scratch

To build the component front end, navigate to the frontend folder and run:
``` npm run build ```

To build the wheel files, navigate tot he primary component folder and run:
``` python setup.py sdist bdist_wheel ```

