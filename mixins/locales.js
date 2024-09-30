import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters("lang",["getLocale"]),
    ...mapGetters("lang",["getDefaultLocale"]),
  }
}
