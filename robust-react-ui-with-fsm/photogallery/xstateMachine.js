// xstate machine
const galleryMachine = Machine(
  {
    id: "gallery",
    initial: "start",
    context: {
      canSearch: true
    },
    states: {
      start: {
        on: {
          SEARCH: {
            target: "loading",
            cond: "validSearch",
            actions: ["search"] //transition action
          }
        }
      },
      loading: {
        on: {
          SEARCH_SUCCESS: {
            target: "gallery"
            // actions: "displayGallery"
          },
          SEARCH_FAILURE: "error",
          CANCEL_SEARCH: "gallery"
        }
      },
      error: {
        on: { SEARCH: "loading" }
      },
      gallery: {
        onEntry: ["dataInGallery", "displayGallery"],
        on: {
          SEARCH: "loading",
          SELECT_PHOTO: "photo"
        }
      },
      photo: {
        on: { EXIT_PHOTO: "gallery" }
      }
    }
  },
  // machine options
  {
    actions: {
      search: () => {
        console.log("searching...");
      },
      dataInGallery: () => {
        console.log("Putting data in App state.items");
      },
      displayGallery: () => {
        console.log("displaying gallery");
      }
    },
    guards: {
      validSearch: ctx => {
        return ctx.canSearch;
      }
    }
  }
);
