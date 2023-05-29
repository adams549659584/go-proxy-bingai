declare module 'vue3-virtual-scroll-list' {
  import type { defineComponent } from 'vue';

  const VirtualProps = {
    dataKey: {
      type: [String, Function],
      required: true,
    },
    dataSources: {
      type: Array,
      required: true,
      default: () => [],
    },
    dataComponent: {
      type: [Object, Function],
      required: true,
    },

    keeps: {
      type: Number,
      default: 30,
    },
    extraProps: {
      type: Object,
    },
    estimateSize: {
      type: Number,
      default: 50,
    },

    direction: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'vertical', // the other value is horizontal
    },
    start: {
      type: Number,
      default: 0,
    },
    offset: {
      type: Number,
      default: 0,
    },
    topThreshold: {
      type: Number,
      default: 0,
    },
    bottomThreshold: {
      type: Number,
      default: 0,
    },
    pageMode: {
      type: Boolean,
      default: false,
    },
    rootTag: {
      type: String,
      default: 'div',
    },
    wrapTag: {
      type: String,
      default: 'div',
    },
    wrapClass: {
      type: String,
      default: 'wrap',
    },
    wrapStyle: {
      type: Object,
    },
    itemTag: {
      type: String,
      default: 'div',
    },
    itemClass: {
      type: String,
      default: '',
    },
    itemClassAdd: {
      type: Function,
    },
    itemStyle: {
      type: Object,
    },
    headerTag: {
      type: String,
      default: 'div',
    },
    headerClass: {
      type: String,
      default: '',
    },
    headerStyle: {
      type: Object,
    },
    footerTag: {
      type: String,
      default: 'div',
    },
    footerClass: {
      type: String,
      default: '',
    },
    footerStyle: {
      type: Object,
    },
    itemScopedSlots: {
      type: Object,
    },
  };
  const VirtualList = defineComponent({
    name: 'VirtualList',
    props: VirtualProps,
  });
  export default VirtualList;
}
