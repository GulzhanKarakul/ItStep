(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5314], {

    27383: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/collections/[id]", function() {
            return n(74202)
        }
        ])
    },

    99512: function(e, t, n) {
        "use strict";
        var r = n(85893)
          , i = n(48848)
          , o = n.n(i);
        t.Z = e=>{
            let {children: t, ...n} = e;
            return (0,
            r.jsxs)("div", {
                ...n,
                className: "jsx-c544d53d675385bb " + (n && null != n.className && n.className || ""),
                children: [t, (0,
                r.jsx)(o(), {
                    id: "c544d53d675385bb",
                    children: "div.jsx-c544d53d675385bb{z-index:1;position:absolute;top:4px;left:-4px;color:#fff!important;padding:0 4px 2px;display:-webkit-box;overflow:hidden;background:var(--primary);margin-right:8px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1;font-size:13px}"
                })]
            })
        }
    },

    99278: function(e, t, n) {
        "use strict";
        n.d(t, {
            e: function() {
                return v
            }
        });
        var r = n(85893)
          , i = n(86010)
          , o = n(41664)
          , a = n.n(o)
          , s = n(11163)
          , c = n(67294)
          , l = n(59794)
          , d = n(12874)
          , u = n(83359)
          , h = n(59093)
          , p = n(22338)
          , _ = n(99512)
          , m = n(13047)
          , f = n.n(m);
        let g = (0,
        c.forwardRef)((e,t)=>{
            let {href: n, subtitle: o, data: c, imgSize: m="mid", withUserRating: g=!1, tag: v, rated: x, onClick: y} = e
              , b = v || c.bookmark_type
              , {main_name: j, secondary_name: w, avg_rating: C, img: N, type: Z} = c
              , {locale: A} = (0,
            s.useRouter)()
              , k = (0,
            h.Z)()
              , V = (0,
            p.Z)(e=>e.ageSubmitted)
              , I = !V && (c.is_erotic || c.is_yaoi)
              , O = "".concat(n || "/".concat(k), "/").concat(c.dir);
            return (0,
            r.jsxs)(a(), {
                href: O,
                title: j || w,
                className: f().card,
                onClick: y,
                ref: t,
                children: [(0,
                r.jsxs)("div", {
                    className: (0,
                    i.Z)({
                        [f().wrapper]: C || x
                    }),
                    children: [(0,
                    r.jsx)(l.Z, {
                        src: N,
                        withHover: !0,
                        className: f().img,
                        blur: I,
                        size: m,
                        alt: "Обложка произведения ".concat(j)
                    }), b ? (0,
                    r.jsx)(_.Z, {
                        children: b
                    }) : null, g && x ? (0,
                    r.jsx)("div", {
                        className: f().rating,
                        children: x
                    }) : null]
                }), (0,
                r.jsxs)("div", {
                    className: "pr-2 pl-0.5 mb-1",
                    children: [o || Z ? (0,
                    r.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0,
                        r.jsxs)(d.Z, {
                            variant: "caption",
                            color: "textSecondary",
                            lineClamp: 1,
                            children: [o || Z, " \xa0\xa0"]
                        }), (0,
                        r.jsxs)(d.Z, {
                            variant: "caption",
                            color: "textSecondary",
                            className: "flex items-center",
                            children: [C, "\xa0", (0,
                            r.jsx)(u.Z, {
                                fontSize: "inherit"
                            })]
                        })]
                    }) : null, (0,
                    r.jsx)(d.Z, {
                        component: "h4",
                        variant: "h6",
                        lineClamp: 2,
                        children: "en" === A ? w : j
                    })]
                })]
            })
        }
        )
        
          , v = e=>{
            var t, n;
            let i = Object.entries(null !== (n = null === (t = e.data) || void 0 === t ? void 0 : t.img) && void 0 !== n ? n : {}).reduce((e,t)=>{
                let[n,r] = t;
                return e[n] = "https://renovels.org".concat(r),
                e
            }
            , {});
            return (0,
            r.jsx)(g, {
                ...e,
                href: "https://renovels.org/novel",
                data: {
                    ...e.data,
                    main_name: e.data.rus_name || e.data.main_name,
                    img: i
                }
            })
        }
        ;
        t.Z = g
    },
    22098: function(e, t, n) {
        "use strict";
        var r = n(85893)
          , i = n(42746)
          , o = n(67294)
          , a = n(12874);
        t.Z = e=>{
            let t = (0,
            i.useTranslations)("common")
              , {text: n=t("Нет результатов"), emoji: s="\uD83D\uDC0B"} = e;
            return (0,
            r.jsxs)("div", {
                className: "flex flex-col items-center justify-center w-full",
                style: {
                    height: "40vh"
                },
                children: [(0,
                r.jsx)(a.Z, {
                    variant: "h1",
                    className: "mb-1",
                    children: s
                }), (0,
                r.jsx)(a.Z, {
                    color: "textSecondary",
                    align: "center",
                    children: "function" == typeof n ? (0,
                    o.cloneElement)(n) : n
                })]
            })
        }
    },
    64784: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r.Z
            }
        });
        var r = n(22098)
    },
    60927: function(e, t, n) {
        "use strict";
        var r = n(85893)
          , i = n(86010);
        n(83454);
        var o = n(67294)
          , a = n(95591)
          , s = n(99278)
          , c = n(64784)
          , l = n(38263)
          , d = n(1624)
          , u = n(16154)
          , h = n(33982)
          , p = n.n(h);
        let _ = (0,
        o.memo)(e=>{
            let {content: t=[], GridItem: n, gridItemClasses: o, withRating: s, withTag: c, blockName: l} = e
              , d = e=>()=>{
                if ((0,
                a.JG)("titleArrayCache", {
                    content: t
                }, !1),
                l) {
                    let t = {
                        dir: e.dir
                    }
                      , n = l === u.P7.library.BOOKMARKS;
                    n && (t = {
                        ...t,
                        dir: e.title.dir,
                        tab: e.type
                    }),
                    (0,
                    u.DQ)(l, t)
                }
            }
            ;
            return (0,
            r.jsx)(r.Fragment, {
                children: t.map(e=>(0,
                r.jsx)("div", {
                    onClick: d(e),
                    className: (0,
                    i.Z)(p().gridItem, o),
                    children: (0,
                    r.jsx)(n, {
                        data: e,
                        withRating: s,
                        withTag: c
                    })
                }, e.id))
            })
        }
        )
          , m = (0,
        o.forwardRef)((e,t)=>{
            let {content: n=[], xlSlim: o, withRating: a=!1, padding: u=8, GridItem: h=s.Z, className: m, withTag: f=!1, blockName: g, isLoading: v=!1, emptyViewProps: x, isEmpty: y, style: b} = e
              , j = (0,
            l.U)(n)
              , w = {
                GridItem: h,
                page: 0,
                withRating: a,
                withTag: f,
                blockName: g,
                gridItemClasses: "p-".concat(u / 8)
            };
            return v && j === y ? (0,
            r.jsx)(d.Z, {}) : y ? (0,
            r.jsx)(c.Z, {
                ...x
            }) : (0,
            r.jsxs)("div", {
                className: (0,
                i.Z)(p().grid, m),
                ref: t,
                style: b,
                children: [j ? function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map((e,t)=>(0,
                    r.jsx)(_, {
                        content: e.content,
                        ...w
                    }, t))
                }(n) : (0,
                r.jsx)(_, {
                    content: n,
                    ...w
                }), Array.from({
                    length: 8
                }, (e,t)=>(0,
                r.jsx)("div", {
                    className: (0,
                    i.Z)(p().gridPlaceholder, {
                        xlSlim: o
                    })
                }, t))]
            })
        }
        );
        t.Z = m
    },
    38263: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return r
            },
            v: function() {
                return i
            }
        });
        let r = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return e.some(e=>"content"in e)
        }
          , i = e=>{
            var t, n;
            return r(e) ? !!(null === (n = e[0]) || void 0 === n ? void 0 : null === (t = n.content) || void 0 === t ? void 0 : t.length) : !!(null == e ? void 0 : e.length)
        }
    },
    1624: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(85893);
        n(67294);
        var i = n(48088)
          , o = ()=>(0,
        r.jsx)("div", {
            className: "flex justify-center items-center min-h-[40vh]",
            children: (0,
            r.jsx)(i.Z, {})
        })
    },
    60996: function(e, t, n) {
        "use strict";
        var r = n(85893)
          , i = n(86010)
          , o = n(45697)
          , a = n.n(o)
          , s = n(67294)
          , c = n(2979)
          , l = n.n(c);
        let d = (0,
        s.forwardRef)((e,t)=>{
            let {color: n="gray", component: o="span", children: a, dense: s, extradense: c, withAction: d, className: u, ...h} = e;
            return (0,
            r.jsx)(o, {
                className: (0,
                i.Z)(l().chip, l()[n], {
                    [l().dense]: s,
                    [l().extradense]: c,
                    [l().withAction]: d
                }, u),
                ...h,
                ref: t,
                children: a
            })
        }
        );
        d.propTypes = {
            color: a().oneOf(["primary", "white", "warning", "error", "gray"]),
            dense: a().bool,
            extradense: a().bool,
            className: a().string,
            children: a().node
        },
        t.Z = d
    },
    59794: function(e, t, n) {
        "use strict";
        var r = n(85893)
          , i = n(86010)
          , o = n(70131)
          , a = n(39709)
          , s = n.n(a)
          , c = n(12788);
        function l(e) {
            let {src: t, withHover: n, initialInView: a, size: l, alt: h, rounded: p, className: _, fixed: m, style: f, imgClassName: g, blur: v, ...x} = e
              , [y,b] = (0,
            o.YD)({
                triggerOnce: !0,
                initialInView: a
            })
              , j = (0,
            c.mn)("string" == typeof t ? t : t[l])
              , w = (0,
            c.kW)({
                src: b ? j : void 0
            })
              , C = (0,
            i.Z)(s().container, {
                [s().hover]: n,
                "rounded-sm": p,
                blur: v
            }, _)
              , N = m ? "img" : d;
            return (0,
            r.jsx)("div", {
                className: (0,
                i.Z)(C, s().imagePlaceholder),
                style: f,
                ref: y,
                children: (0,
                r.jsx)(N, {
                    alt: h,
                    className: (0,
                    i.Z)(s().image, s().imgFluid, g, {
                        [s().lazy]: !w,
                        [s().lazyLoaded]: w
                    }),
                    src: w || a ? j : u,
                    ...x
                })
            })
        }
        let d = e=>{
            let {src: t, children: n, className: o, ...a} = e;
            return (0,
            r.jsx)("div", {
                className: (0,
                i.Z)(s().imgStatic, o),
                style: {
                    backgroundImage: 'url("'.concat(t, '")')
                },
                ...a,
                children: n
            })
        }
          , u = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
        l.defaultProps = {
            size: "low",
            rounded: !0,
            fixed: !1
        },
        t.Z = l
    },
    83359: function(e, t, n) {
        "use strict";
        var r = n(85893)
          , i = n(12788);
        t.Z = (0,
        i.Ll)((0,
        r.jsx)("path", {
            d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        }), "Star")
    },
    74202: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSP: function() {
                return R
            },
            default: function() {
                return M
            }
        });
        var r = n(85893)
          , i = n(34996)
          , o = n(81602)
          , a = n(23746)
          , s = n(67294)
          , c = n(40499)
          , l = n.n(c)
          , d = n(11163)
          , u = n(95591)
          , h = n(17175);
        let p = {
            content: {},
            props: {}
        }
          , _ = (0,
        s.createContext)({})
          , m = e=>{
            let {id: t} = (0,
            d.useRouter)().query
              , {data: n=p, isEmpty: r, error: i} = (0,
            u.ZP)("api/titles/collections/".concat(t, "/"), {
                fallbackData: e,
                use: [h.xb]
            });
            return (0,
            s.useMemo)(()=>({
                ...n,
                error: i,
                isEmpty: r
            }), [n, i])
        }
          , f = e=>{
            let {children: t, fallbackData: n} = e
              , i = m(n);
            return (0,
            r.jsx)(_.Provider, {
                value: i,
                children: t
            })
        }
        ;
        var g = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e=>e;
            return e((0,
            s.useContext)(_))
        }
          , v = n(60927)
          , x = n(16154)
          , y = e=>{
            let {content: t, isEmpty: n} = g()
              , {titles: i} = t;
            return (0,
            r.jsx)(v.Z, {
                content: i,
                ...e,
                isEmpty: n,
                blockName: x.P7.collections.COLLECTION_PAGE
            })
        }
          , b = n(12874)
          , j = ()=>{
            let e = g(e=>e.content.description);
            return (0,
            r.jsx)(b.Z, {
                component: "h3",
                variant: "body1",
                align: "center",
                color: "textSecondary",
                className: l().description,
                children: e
            })
        }
          , w = ()=>{
            let e = g(e=>e.content.name);
            return (0,
            r.jsx)(b.Z, {
                component: "h1",
                variant: "h2",
                align: "center",
                lineClamp: 2,
                className: l().name,
                children: e
            })
        }
          , C = n(42746)
          , N = n(60996)
          , Z = n(12788);
        let A = e=>Array.isArray(e) ? e.map(e=>e.genres).flat().reduce((e,t)=>{
            var n, r;
            return e[t.id] = {
                ...t || {},
                count: (null !== (r = null === (n = e[t.id]) || void 0 === n ? void 0 : n.count) && void 0 !== r ? r : 0) + 1
            },
            e
        }
        , {}) : {}
          , k = e=>Object.entries(e).sort(V).map(e=>e[0]);
        function V(e, t) {
            return e[1].count < t[1].count ? 1 : e[1].count > t[1].count ? -1 : 0
        }
        let I = {
            nom: "тег",
            gen: "тега",
            plu: "тегов"
        };
        var O = e=>{
            let {maxLength: t=9} = e
              , n = g(e=>e.content.titles)
              , i = A(n)
              , o = i && k(i)
              , a = (0,
            C.useTranslations)("common")
              , {length: s} = o
              , [c,d] = (0,
            Z.y3)(s <= t);
            if (!o)
                return null;
            let u = c ? o : o.slice(0, t);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [u.map(e=>(0,
                r.jsxs)(N.Z, {
                    color: "gray",
                    className: l().genre,
                    children: [(0,
                    r.jsx)("p", {
                        className: l().count,
                        children: "".concat(i[e].count, "x")
                    }), (0,
                    r.jsx)("p", {
                        children: "".concat(i[e].name)
                    })]
                }, e)), s > t && (0,
                r.jsx)(N.Z, {
                    onClick: d,
                    color: "white",
                    style: {
                        color: "var(--primary)"
                    },
                    children: c ? a("Скрыть") : "...".concat(a("Больше"), " ").concat(s - 10, " ").concat((0,
                    Z.Q_)(s - 10, I))
                })]
            })
        }
          , P = (0,
        s.memo)(()=>(0,
        r.jsxs)("div", {
            className: "flex flex-1 flex-col items-center",
            children: [(0,
            r.jsxs)(a.Z, {
                slim: !0,
                className: "flex flex-col items-center justify-center",
                style: {
                    flex: 0
                },
                children: [(0,
                r.jsx)(w, {}), (0,
                r.jsx)(j, {})]
            }), (0,
            r.jsx)(a.Z, {
                className: l().genreWrapper,
                style: {
                    flex: 0
                },
                children: (0,
                r.jsx)(O, {})
            }), (0,
            r.jsx)(a.Z, {
                slim: !0,
                className: "mt8",
                children: (0,
                r.jsx)("div", {
                    className: l().content,
                    children: (0,
                    r.jsx)(y, {})
                })
            })]
        }))
          , S = n(2962)
          , z = n(87234)
          , E = e=>{
            let {data: t, loaded: n} = e
              , i = (0,
            z.Z)()
              , {content: o} = g()
              , a = "Коллекция ".concat(o.name, " — ").concat(i.name)
              , s = "Страница коллекции ".concat(o.name, " на сайте — ").concat(i.name, " ").concat(o.description)
              , c = "".concat(i.fullUrl, "/collections/").concat(o.id);
            return (0,
            r.jsx)(S.PB, {
                title: a,
                description: s,
                canonical: c,
                generator: "".concat(i.name, " (").concat(i.fullUrl, ")"),
                openGraph: {
                    title: a,
                    description: s,
                    url: c,
                    images: [{
                        url: "".concat(i.apiUrl).concat(o.cover),
                        width: 186,
                        height: 270,
                        alt: "Аватар автора ".concat(o.name)
                    }]
                }
            })
        }
          , R = !0
          , M = e=>(0,
        r.jsx)(f, {
            ...e,
            children: (0,
            r.jsxs)(o.Z, {
                error: e.error,
                fullheight: !0,
                headerProps: {
                    wrapper: i.ZP
                },
                children: [(0,
                r.jsx)(E, {}), (0,
                r.jsx)(P, {
                    ...e
                })]
            })
        })
    },
    13047: function(e) {
        e.exports = {
            card: "Vertical_card__Qez7E",
            img: "Vertical_img__NzNfn",
            rect: "Vertical_rect__iY6PR",
            rating: "Vertical_rating__uEX59",
            wrapper: "Vertical_wrapper__GnC8C",
            likes: "Vertical_likes__xNCXC",
            icon: "Vertical_icon__Xzx4c"
        }
    },
    33982: function(e) {
        e.exports = {
            grid: "Grid_grid__XU5Pz",
            gridItem: "Grid_gridItem__aPUx1",
            gridPlaceholder: "Grid_gridPlaceholder__2iCsF",
            xlSlim: "Grid_xlSlim__sScWe"
        }
    },
    40499: function(e) {
        e.exports = {
            header: "Collection_header__E06__",
            headerInner: "Collection_headerInner__g2S4N",
            avatarContainer: "Collection_avatarContainer__1p7Y6",
            avatar: "Collection_avatar__szxNG",
            headerContent: "Collection_headerContent__XKY7h",
            name: "Collection_name__DN7af",
            description: "Collection_description__LjWhu",
            tagline: "Collection_tagline__0V3Av",
            username: "Collection_username__5DMX1",
            genreWrapper: "Collection_genreWrapper__qFt1A",
            genre: "Collection_genre__WJ8yi",
            count: "Collection_count__ZhM_Z",
            content: "Collection_content__DKFwh"
        }
    },
    2979: function(e) {
        e.exports = {
            chip: "Chip_chip__0JxfA",
            white: "Chip_white__lcP51",
            primary: "Chip_primary__ross4",
            secondary: "Chip_secondary__nswUj",
            warning: "Chip_warning__3vZCK",
            error: "Chip_error__71r0w",
            gray: "Chip_gray__IEsKT",
            withAction: "Chip_withAction__a4ul2",
            dense: "Chip_dense___WvGL",
            extradense: "Chip_extradense__KhYIR"
        }
    },
    39709: function(e) {
        e.exports = {
            image: "Image_image__85Rxf",
            lazy: "Image_lazy__P_Dii",
            imgFluid: "Image_imgFluid__7ygPD",
            imgStatic: "Image_imgStatic__qYXY7",
            container: "Image_container__z9DC9",
            hover: "Image_hover__3aJFw",
            imagePlaceholder: "Image_imagePlaceholder__7plww",
            lazyLoaded: "Image_lazyLoaded__LVajX"
        }
    },
    70131: function(e, t, n) {
        "use strict";
        n.d(t, {
            YD: function() {
                return _
            }
        });
        var r = n(67294);
        function i() {
            return (i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function o(e, t) {
            return (o = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var a = new Map
          , s = new WeakMap
          , c = 0
          , l = void 0;
        function d(e, t, n, r) {
            if (void 0 === n && (n = {}),
            void 0 === r && (r = l),
            void 0 === window.IntersectionObserver && void 0 !== r) {
                var i = e.getBoundingClientRect();
                return t(r, {
                    isIntersecting: r,
                    target: e,
                    intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
                    time: 0,
                    boundingClientRect: i,
                    intersectionRect: i,
                    rootBounds: i
                }),
                function() {}
            }
            var o = function(e) {
                var t = Object.keys(e).sort().filter(function(t) {
                    return void 0 !== e[t]
                }).map(function(t) {
                    var n;
                    return t + "_" + ("root" === t ? (n = e.root) ? (s.has(n) || (c += 1,
                    s.set(n, c.toString())),
                    s.get(n)) : "0" : e[t])
                }).toString()
                  , n = a.get(t);
                if (!n) {
                    var r, i = new Map, o = new IntersectionObserver(function(t) {
                        t.forEach(function(t) {
                            var n, o = t.isIntersecting && r.some(function(e) {
                                return t.intersectionRatio >= e
                            });
                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o),
                            null == (n = i.get(t.target)) || n.forEach(function(e) {
                                e(o, t)
                            })
                        })
                    }
                    ,e);
                    r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]),
                    n = {
                        id: t,
                        observer: o,
                        elements: i
                    },
                    a.set(t, n)
                }
                return n
            }(n)
              , d = o.id
              , u = o.observer
              , h = o.elements
              , p = h.get(e) || [];
            return h.has(e) || h.set(e, p),
            p.push(t),
            u.observe(e),
            function() {
                p.splice(p.indexOf(t), 1),
                0 === p.length && (h.delete(e),
                u.unobserve(e)),
                0 === h.size && (u.disconnect(),
                a.delete(d))
            }
        }
        var u = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];
        function h(e) {
            return "function" != typeof e.children
        }
        var p = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).node = null,
                n._unobserveCb = null,
                n.handleNode = function(e) {
                    !n.node || (n.unobserve(),
                    e || n.props.triggerOnce || n.props.skip || n.setState({
                        inView: !!n.props.initialInView,
                        entry: void 0
                    })),
                    n.node = e || null,
                    n.observeNode()
                }
                ,
                n.handleChange = function(e, t) {
                    e && n.props.triggerOnce && n.unobserve(),
                    h(n.props) || n.setState({
                        inView: e,
                        entry: t
                    }),
                    n.props.onChange && n.props.onChange(e, t)
                }
                ,
                n.state = {
                    inView: !!t.initialInView,
                    entry: void 0
                },
                n
            }
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            o(t, e);
            var n = t.prototype;
            return n.componentDidUpdate = function(e) {
                (e.rootMargin !== this.props.rootMargin || e.root !== this.props.root || e.threshold !== this.props.threshold || e.skip !== this.props.skip || e.trackVisibility !== this.props.trackVisibility || e.delay !== this.props.delay) && (this.unobserve(),
                this.observeNode())
            }
            ,
            n.componentWillUnmount = function() {
                this.unobserve(),
                this.node = null
            }
            ,
            n.observeNode = function() {
                if (this.node && !this.props.skip) {
                    var e = this.props
                      , t = e.threshold
                      , n = e.root
                      , r = e.rootMargin
                      , i = e.trackVisibility
                      , o = e.delay
                      , a = e.fallbackInView;
                    this._unobserveCb = d(this.node, this.handleChange, {
                        threshold: t,
                        root: n,
                        rootMargin: r,
                        trackVisibility: i,
                        delay: o
                    }, a)
                }
            }
            ,
            n.unobserve = function() {
                this._unobserveCb && (this._unobserveCb(),
                this._unobserveCb = null)
            }
            ,
            n.render = function() {
                if (!h(this.props)) {
                    var e = this.state
                      , t = e.inView
                      , n = e.entry;
                    return this.props.children({
                        inView: t,
                        entry: n,
                        ref: this.handleNode
                    })
                }
                var o = this.props
                  , a = o.children
                  , s = o.as
                  , c = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, i = {}, o = Object.keys(e);
                    for (r = 0; r < o.length; r++)
                        n = o[r],
                        t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(o, u);
                return r.createElement(s || "div", i({
                    ref: this.handleNode
                }, c), a)
            }
            ,
            t
        }(r.Component);
        function _(e) {
            var t = void 0 === e ? {} : e
              , n = t.threshold
              , i = t.delay
              , o = t.trackVisibility
              , a = t.rootMargin
              , s = t.root
              , c = t.triggerOnce
              , l = t.skip
              , u = t.initialInView
              , h = t.fallbackInView
              , p = r.useRef()
              , _ = r.useState({
                inView: !!u
            })
              , m = _[0]
              , f = _[1]
              , g = r.useCallback(function(e) {
                void 0 !== p.current && (p.current(),
                p.current = void 0),
                !l && e && (p.current = d(e, function(e, t) {
                    f({
                        inView: e,
                        entry: t
                    }),
                    t.isIntersecting && c && p.current && (p.current(),
                    p.current = void 0)
                }, {
                    root: s,
                    rootMargin: a,
                    threshold: n,
                    trackVisibility: o,
                    delay: i
                }, h))
            }, [Array.isArray(n) ? n.toString() : n, s, a, c, l, o, h, i]);
            (0,
            r.useEffect)(function() {
                p.current || !m.entry || c || l || f({
                    inView: !!u
                })
            });
            var v = [g, m.inView, m.entry];
            return v.ref = v[0],
            v.inView = v[1],
            v.entry = v[2],
            v
        }
        p.displayName = "InView",
        p.defaultProps = {
            threshold: 0,
            triggerOnce: !1,
            initialInView: !1
        }
    }
}, function(e) {
    e.O(0, [9458, 1602, 9774, 2888, 179], function() {
        return e(e.s = 27383)
    }),
    _N_E = e.O()
}
]);
