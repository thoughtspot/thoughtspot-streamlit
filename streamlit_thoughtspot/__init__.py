import os
import streamlit.components.v1 as components

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
# (This is, of course, optional - there are innumerable ways to manage your
# release process.)
_RELEASE = True

# Declare a Streamlit component. `declare_component` returns a function
# that is used to create instances of the component. We're naming this
# function "_component_func", with an underscore prefix, because we don't want
# to expose it directly to users. Instead, we will create a custom wrapper
# function, below, that will serve as our component's public API.

# It's worth noting that this call to `declare_component` is the
# *only thing* you need to do to create the binding between Streamlit and
# your component frontend. Everything else we do in this file is simply a
# best practice.

if not _RELEASE:
    _component_func = components.declare_component(
        # We give the component a simple, descriptive name ("thoughtspot_search_component"
        # does not fit this bill, so please choose something better for your
        # own component :)
        "thoughtspot_search_component",
        # Pass `url` here to tell Streamlit that the component will be served
        # by the local dev server that you run via `npm run start`.
        # (This is useful while your component is in development.)
        url="http://localhost:3001",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to to the component's
    # build directory:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("thoughtspot_search_component", path=build_dir)


# Create a wrapper function for the component. This is an optional
# best practice - we could simply expose the component function returned by
# `declare_component` and call it done. The wrapper allows us to customize
# our component's API: we can pre-process its input args, post-process its
# output value, and add a docstring for users.
def thoughtspot_search_component(
    host=None,
    width=1000,
    height=600,
    sso=None,
    datasources=None,
    searchstring=None,
    answerid=None):
    component_value = _component_func(component="search",host=host,width=width,height=height,sso=sso,datasources=datasources,searchstring=searchstring,answerid=answerid)
    return component_value

def thoughtspot_liveboard_component(
    host=None,
    width=1000,
    height=600,
    sso=None,
    liveboardid=None,
    vizid=None):
    component_value = _component_func(component="liveboard",host=host,width=width,height=height,sso=sso,liveboardid=liveboardid,vizid=vizid)
    return component_value

# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run thoughtspot_search_component/__init__.py`
if not _RELEASE:
    import streamlit as st
    st.set_page_config(layout="wide")

    st.subheader("ThoughtSpot Example")
    # Create an instance of our component with a constant `name` arg, and
    # print its output value.
    thoughtspot_liveboard_component(
        host="https://se-thoughtspot-cloud.thoughtspot.cloud/",
        width=1400,
        height=600,
        liveboardid=["40133c1d-5fe1-46dd-896d-034a4219a2a7"])


