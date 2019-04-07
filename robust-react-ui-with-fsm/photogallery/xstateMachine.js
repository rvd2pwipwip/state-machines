// xstate machine
const galleryMachine = Machine({
  id: "gallery",
  initial: "start",
  states: {
    start: {
      on: { SEARCH: "loading" }
    },
    loading: {
      on: {
        SEARCH_SUCCESS: "gallery",
        SEARCH_FAILURE: "error",
        CANCEL_SEARCH: "gallery"
      }
    },
    error: {
      on: { SEARCH: "loading" }
    },
    gallery: {
      on: {
        SEARCH: "loading",
        SELECT_PHOTO: "photo"
      }
    },
    photo: {
      on: { EXIT_PHOTO: "gallery" }
    }
  }
});