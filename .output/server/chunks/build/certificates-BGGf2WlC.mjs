import { _ as _sfc_main$1 } from './Container-B5vu2UPU.mjs';
import { _ as __nuxt_component_0$1, a as _sfc_main$d } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import '@vueuse/core';
import '@vueuse/shared';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "certificates",
  __ssrInlineRender: true,
  setup(__props) {
    const certificates = [
      { title: "Аккредитация специалиста", image: "/images/certificates/certificate-01.jpg" },
      { title: "Диплом и профессиональная подготовка", image: "/images/certificates/certificate-02.jpg" },
      { title: "Сертификат по хирургической стоматологии", image: "/images/certificates/certificate-03.jpg" },
      { title: "Повышение квалификации", image: "/images/certificates/certificate-04.jpg" },
      { title: "Профессиональное обучение", image: "/images/certificates/certificate-05.jpg" },
      { title: "Стоматологическая практика", image: "/images/certificates/certificate-06.jpg" },
      { title: "Диплом врача", image: "/images/certificates/certificate-07.jpg" },
      { title: "Сертификат Ankelos", image: "/images/certificates/certificate-08.jpg" },
      { title: "Сертификат Ankelos", image: "/images/certificates/certificate-09.jpg" },
      { title: "Сертификат Nobel", image: "/images/certificates/certificate-10.jpg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$d;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen overflow-hidden bg-[#f4f8ff] text-[#0f2c33]" }, _attrs))}><div class="pointer-events-none fixed left-[-12%] top-[-12%] h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl"></div><div class="pointer-events-none fixed bottom-[-16%] right-[-12%] h-[560px] w-[560px] rounded-full bg-cyan-100/70 blur-3xl"></div>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "relative max-w-7xl px-6 py-8 md:px-10 lg:px-14" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="mb-14 flex items-center justify-between rounded-full border border-white/40 bg-white/35 px-4 py-3 backdrop-blur-2xl animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_both] sm:px-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "flex items-center gap-3 text-[#2563eb]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-arrow-left",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-sm font-medium"${_scopeId2}>На главную</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "i-lucide-arrow-left",
                      class: "size-5"
                    }),
                    createVNode("span", { class: "text-sm font-medium" }, "На главную")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-sm font-medium uppercase tracking-[0.18em] text-[#2563eb]"${_scopeId}> Сертификаты </div></header><section class="mb-14 animate-[fade-left_0.8s_cubic-bezier(0.22,1,0.36,1)_both]"${_scopeId}><p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]"${_scopeId}> Документы </p><h1 class="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#102d34] md:text-7xl"${_scopeId}> Дипломы, сертификаты и обучение. </h1></section><section class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(certificates, (item, index) => {
              _push2(`<a${ssrRenderAttr("href", item.image)} target="_blank" class="group overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/50 shadow-[0_18px_48px_rgba(15,44,51,0.08)] backdrop-blur-xl transition duration-300 animate-[fade-up_0.65s_cubic-bezier(0.22,1,0.36,1)_both] hover:-translate-y-1" style="${ssrRenderStyle({ animationDelay: `${index * 0.06}s` })}"${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="h-[460px] w-full bg-white object-contain p-4 transition duration-700 group-hover:scale-[1.02]" loading="lazy"${_scopeId}><div class="border-t border-[#dbeafe] p-5"${_scopeId}><div class="mb-2 text-sm text-[#2563eb]"${_scopeId}>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</div><h2 class="text-lg font-semibold text-[#102d34]"${_scopeId}>${ssrInterpolate(item.title)}</h2></div></a>`);
            });
            _push2(`<!--]--></section>`);
          } else {
            return [
              createVNode("header", { class: "mb-14 flex items-center justify-between rounded-full border border-white/40 bg-white/35 px-4 py-3 backdrop-blur-2xl animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_both] sm:px-6" }, [
                createVNode(_component_NuxtLink, {
                  to: "/",
                  class: "flex items-center gap-3 text-[#2563eb]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UIcon, {
                      name: "i-lucide-arrow-left",
                      class: "size-5"
                    }),
                    createVNode("span", { class: "text-sm font-medium" }, "На главную")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "text-sm font-medium uppercase tracking-[0.18em] text-[#2563eb]" }, " Сертификаты ")
              ]),
              createVNode("section", { class: "mb-14 animate-[fade-left_0.8s_cubic-bezier(0.22,1,0.36,1)_both]" }, [
                createVNode("p", { class: "text-sm uppercase tracking-[0.25em] text-[#6b7da6]" }, " Документы "),
                createVNode("h1", { class: "mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#102d34] md:text-7xl" }, " Дипломы, сертификаты и обучение. ")
              ]),
              createVNode("section", { class: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" }, [
                (openBlock(), createBlock(Fragment, null, renderList(certificates, (item, index) => {
                  return createVNode("a", {
                    key: item.image,
                    href: item.image,
                    target: "_blank",
                    class: "group overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/50 shadow-[0_18px_48px_rgba(15,44,51,0.08)] backdrop-blur-xl transition duration-300 animate-[fade-up_0.65s_cubic-bezier(0.22,1,0.36,1)_both] hover:-translate-y-1",
                    style: { animationDelay: `${index * 0.06}s` }
                  }, [
                    createVNode("img", {
                      src: item.image,
                      alt: item.title,
                      class: "h-[460px] w-full bg-white object-contain p-4 transition duration-700 group-hover:scale-[1.02]",
                      loading: "lazy"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "border-t border-[#dbeafe] p-5" }, [
                      createVNode("div", { class: "mb-2 text-sm text-[#2563eb]" }, toDisplayString(String(index + 1).padStart(2, "0")), 1),
                      createVNode("h2", { class: "text-lg font-semibold text-[#102d34]" }, toDisplayString(item.title), 1)
                    ])
                  ], 12, ["href"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/certificates.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=certificates-BGGf2WlC.mjs.map
