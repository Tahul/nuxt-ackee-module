import { defineComponent, computed, h, useSSRContext } from 'vue';

const _sfc_main = defineComponent({
  props: {
    src: {
      type: [String, Object],
      default: null
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(props) {
    const imgSrc = computed(() => {
      let src = props.src;
      try {
        src = JSON.parse(src);
      } catch (e) {
        src = props.src;
      }
      if (typeof src === "string") {
        return props.src;
      }
      return src;
    });
    return {
      imgSrc
    };
  },
  render({ imgSrc }) {
    if (typeof imgSrc === "string") {
      return h("img", { src: imgSrc });
    }
    const nodes = [];
    if (imgSrc.light) {
      nodes.push(h("img", { src: imgSrc.light, class: ["dark-img"] }));
    }
    if (imgSrc.dark) {
      nodes.push(h("img", { src: imgSrc.dark, class: ["light-img"] }));
    }
    return nodes;
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=NuxtImg.3a48767a.mjs.map
