import { _ as _sfc_main$1 } from './Container-B5vu2UPU.mjs';
import { _ as __nuxt_component_0$1, a as _sfc_main$d } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "works",
  __ssrInlineRender: true,
  setup(__props) {
    const works = [
      {
        title: "Кейс 1",
        text: "Восстановление эстетики фронтального отдела.",
        photos: ["/images/cases/1/photo-01.jpg", "/images/cases/1/photo-02.jpg", "/images/cases/1/photo-03.jpg"]
      },
      {
        title: "Кейс 2",
        text: "Комплексная работа с зубным рядом и прикусом.",
        photos: ["/images/cases/2/photo-01.jpg", "/images/cases/2/photo-02.jpg", "/images/cases/2/photo-03.jpg", "/images/cases/2/photo-04.jpg"]
      },
      {
        title: "Кейс 3",
        text: "Фотопротокол лечения с несколькими клиническими этапами.",
        photos: ["/images/cases/3/photo-01.jpg", "/images/cases/3/photo-02.jpg", "/images/cases/3/photo-03.jpg", "/images/cases/3/photo-04.jpg"]
      },
      {
        title: "Кейс 4",
        text: "Хирургический этап и контроль результата.",
        photos: ["/images/cases/4/photo-01.jpg", "/images/cases/4/photo-02.jpg", "/images/cases/4/photo-03.jpg", "/images/cases/4/photo-04.jpg", "/images/cases/4/photo-05.jpg"]
      },
      {
        title: "Кейс 5",
        text: "Серия снимков после проведенного лечения.",
        photos: ["/images/cases/5/photo-01.jpg", "/images/cases/5/photo-02.jpg", "/images/cases/5/photo-03.jpg"]
      },
      {
        title: "Кейс 6",
        text: "Исходная ситуация и клинический результат.",
        photos: ["/images/cases/6/photo-01.jpg", "/images/cases/6/photo-02.jpg"]
      },
      {
        title: "Кейс 7",
        text: "Финальный фотопротокол лечения.",
        photos: ["/images/cases/7/photo-01.jpg", "/images/cases/7/photo-02.jpg", "/images/cases/7/photo-03.jpg"]
      }
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
            _push2(`<div class="text-sm font-medium uppercase tracking-[0.18em] text-[#2563eb]"${_scopeId}> Работы </div></header><section class="mb-14 animate-[fade-left_0.8s_cubic-bezier(0.22,1,0.36,1)_both]"${_scopeId}><p class="text-sm uppercase tracking-[0.25em] text-[#6b7da6]"${_scopeId}> Клинические случаи </p><h1 class="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#102d34] md:text-7xl"${_scopeId}> Работы и фотопротоколы лечения. </h1></section><section class="space-y-12"${_scopeId}><!--[-->`);
            ssrRenderList(works, (item, index) => {
              _push2(`<article class="border-t border-[#c9e4e6] pt-8 animate-[fade-up_0.75s_cubic-bezier(0.22,1,0.36,1)_both]" style="${ssrRenderStyle({ animationDelay: `${index * 0.08}s` })}"${_scopeId}><div class="mb-6 grid gap-4 md:grid-cols-[180px_1fr] md:items-end"${_scopeId}><div class="text-sm font-medium text-[#2563eb]"${_scopeId}> Кейс ${ssrInterpolate(String(index + 1).padStart(2, "0"))}</div><div${_scopeId}><h2 class="text-3xl font-semibold text-[#102d34]"${_scopeId}>${ssrInterpolate(item.title)}</h2><p class="mt-3 max-w-2xl text-lg leading-8 text-[#5f6f92]"${_scopeId}>${ssrInterpolate(item.text)}</p></div></div><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(item.photos, (photo) => {
                _push2(`<a${ssrRenderAttr("href", photo)} target="_blank" class="group block overflow-hidden rounded-[1.25rem] border border-white/60 bg-white/40 shadow-[0_18px_48px_rgba(15,44,51,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,44,51,0.12)]"${_scopeId}><img${ssrRenderAttr("src", photo)}${ssrRenderAttr("alt", `${item.title}: фото работы`)} class="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy"${_scopeId}></a>`);
              });
              _push2(`<!--]--></div></article>`);
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
                createVNode("div", { class: "text-sm font-medium uppercase tracking-[0.18em] text-[#2563eb]" }, " Работы ")
              ]),
              createVNode("section", { class: "mb-14 animate-[fade-left_0.8s_cubic-bezier(0.22,1,0.36,1)_both]" }, [
                createVNode("p", { class: "text-sm uppercase tracking-[0.25em] text-[#6b7da6]" }, " Клинические случаи "),
                createVNode("h1", { class: "mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#102d34] md:text-7xl" }, " Работы и фотопротоколы лечения. ")
              ]),
              createVNode("section", { class: "space-y-12" }, [
                (openBlock(), createBlock(Fragment, null, renderList(works, (item, index) => {
                  return createVNode("article", {
                    key: item.title,
                    class: "border-t border-[#c9e4e6] pt-8 animate-[fade-up_0.75s_cubic-bezier(0.22,1,0.36,1)_both]",
                    style: { animationDelay: `${index * 0.08}s` }
                  }, [
                    createVNode("div", { class: "mb-6 grid gap-4 md:grid-cols-[180px_1fr] md:items-end" }, [
                      createVNode("div", { class: "text-sm font-medium text-[#2563eb]" }, " Кейс " + toDisplayString(String(index + 1).padStart(2, "0")), 1),
                      createVNode("div", null, [
                        createVNode("h2", { class: "text-3xl font-semibold text-[#102d34]" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "mt-3 max-w-2xl text-lg leading-8 text-[#5f6f92]" }, toDisplayString(item.text), 1)
                      ])
                    ]),
                    createVNode("div", { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.photos, (photo) => {
                        return openBlock(), createBlock("a", {
                          key: photo,
                          href: photo,
                          target: "_blank",
                          class: "group block overflow-hidden rounded-[1.25rem] border border-white/60 bg-white/40 shadow-[0_18px_48px_rgba(15,44,51,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,44,51,0.12)]"
                        }, [
                          createVNode("img", {
                            src: photo,
                            alt: `${item.title}: фото работы`,
                            class: "h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.03]",
                            loading: "lazy"
                          }, null, 8, ["src", "alt"])
                        ], 8, ["href"]);
                      }), 128))
                    ])
                  ], 4);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=works-BxkwKaHk.mjs.map
