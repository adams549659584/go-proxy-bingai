var SydneyFullScreenConv;
(function(n) {
    function yi(n) {
        var w, d, g, nt, it, rt, ft, et, ot, at, yt, pt, ni, yi, ir, rr, fr, er, or, cr, ar, vr, yr, pr, wr, br, kr, dr, gr, nu, iu, uu, fu, eu, ou, su, hu, cu, lu, au, vu, yu, pu, y, wu, tf, rf, uf, bu, ff, ku, i, p, h, du, gu, ef;
        if (n === void 0 && (n = null),
        y = _ge(ur),
        !y.querySelector("cib-serp")) {
            st = (w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.usePill;
            ht = (d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.enableScrollOut;
            ct = (g = _w._sydConvConfig) === null || g === void 0 ? void 0 : g.enableSydContext;
            l = (nt = _w._sydConvConfig) === null || nt === void 0 ? void 0 : nt.enableSydHistory;
            sr = (it = _w._sydConvConfig) === null || it === void 0 ? void 0 : it.enableSydTigerAns;
            wt = (rt = _w._sydConvConfig) === null || rt === void 0 ? void 0 : rt.enableSydAjax;
            ut = (ft = _w._sydConvConfig) === null || ft === void 0 ? void 0 : ft.enableSydCarousel;
            k = (et = _w._sydConvConfig) === null || et === void 0 ? void 0 : et.moveOnlySydXAnswers;
            f = (ot = _w._sydConvConfig) === null || ot === void 0 ? void 0 : ot.hideSydFSC;
            e = (at = _w._sydConvConfig) === null || at === void 0 ? void 0 : at.enableSydOverlay;
            lt = (yt = _w._sydConvConfig) === null || yt === void 0 ? void 0 : yt.enable1TCibSlot;
            b = (pt = _w._sydConvConfig) === null || pt === void 0 ? void 0 : pt.enableSydX1T;
            bt = (ni = _w._sydConvConfig) === null || ni === void 0 ? void 0 : ni.hideSydMic;
            kt = (yi = _w._sydConvConfig) === null || yi === void 0 ? void 0 : yi.fromNoResults;
            si = (ir = _w._sydConvConfig) === null || ir === void 0 ? void 0 : ir.codexWinEnableCustomGreeting;
            hi = (rr = _w._sydConvConfig) === null || rr === void 0 ? void 0 : rr.codexWinGreetingCustomString;
            ti = (fr = _w._sydConvConfig) === null || fr === void 0 ? void 0 : fr.checkCreatorAnsFor1T;
            dt = SydFSCHelper.getConfigOrDefault((er = _w._sydConvConfig) === null || er === void 0 ? void 0 : er.enableSydCarouselHistory, !1);
            hr = SydFSCHelper.getConfigOrDefault((or = _w._sydConvConfig) === null || or === void 0 ? void 0 : or.enableSQMsg, !1);
            gt = SydFSCHelper.getConfigOrDefault((cr = _w._sydConvConfig) === null || cr === void 0 ? void 0 : cr.enableSemSerpNoCache, !1);
            ii = SydFSCHelper.getConfigOrDefault((ar = _w._sydConvConfig) === null || ar === void 0 ? void 0 : ar.enableSydStaticAdsLink, !1);
            var sf = SydFSCHelper.getConfigOrDefault((vr = _w._sydConvConfig) === null || vr === void 0 ? void 0 : vr.hideSydReconnect, !1)
              , hf = (yr = _w._sydConvConfig) === null || yr === void 0 ? void 0 : yr.enableDlBing
              , cf = (pr = _w._sydConvConfig) === null || pr === void 0 ? void 0 : pr.disableSydGhosting
              , lf = SydFSCHelper.getConfigOrDefault((wr = _w._sydConvConfig) === null || wr === void 0 ? void 0 : wr.disableCibNotificationStyleUpdate, !1)
              , af = _w._sydCachedString
              , nf = _w._sydAddOptionsSet;
            if (_G[SydFSCHelper.SYD_MODE] = "serp",
            _G[SydFSCHelper.SYD_PREV_MODE] = "",
            ri = SydFSCHelper.getConfigOrDefault((br = _w._sydConvConfig) === null || br === void 0 ? void 0 : br.disableTabletScroll, !1),
            ui = SydFSCHelper.getConfigOrDefault((kr = _w._sydConvConfig) === null || kr === void 0 ? void 0 : kr.disableTabletScrollOut, !1),
            c = SydFSCHelper.getConfigOrDefault((dr = _w._sydConvConfig) === null || dr === void 0 ? void 0 : dr.disableFocusedTabletScrollOut, !1),
            fi = SydFSCHelper.getConfigOrDefault((gr = _w._sydConvConfig) === null || gr === void 0 ? void 0 : gr.disableTouchDesktopScroll, !1),
            ei = SydFSCHelper.getConfigOrDefault((nu = _w._sydConvConfig) === null || nu === void 0 ? void 0 : nu.disableDesktopScroll, !1),
            oi = SydFSCHelper.getConfigOrDefault((iu = _w._sydConvConfig) === null || iu === void 0 ? void 0 : iu.enableConvModeSwitchAjax, !1),
            ai = SydFSCHelper.getConfigOrDefault((uu = _w._sydConvConfig) === null || uu === void 0 ? void 0 : uu.enableCssSplitConvModeOnClick, 0),
            vt = SydFSCHelper.getConfigOrDefault((fu = _w._sydConvConfig) === null || fu === void 0 ? void 0 : fu.enableWelcomeScreenV2, !1),
            vi = SydFSCHelper.getConfigOrDefault((eu = _w._sydConvConfig) === null || eu === void 0 ? void 0 : eu.enable2TQueryConfigsOnSerpLoad, !1),
            a = _d.createElement("slot"),
            a.setAttribute("name", "firstAnswer"),
            a.setAttribute("slot", "firstAns"),
            v = _d.createElement("slot"),
            v.setAttribute("name", "firstAns"),
            r = ((ou = _d.getElementsByClassName("b_top")) === null || ou === void 0 ? void 0 : ou.length) > 0 ? _d.getElementsByClassName("b_top")[0] : null,
            tt = !r ? !1 : r.getElementsByClassName("b_wpt_ch").length > 0 || r.getElementsByClassName("qna-sydney").length > 0,
            wu = _ge("b_header"),
            y && wu && sj_b.insertBefore(y, wu),
            t = _d.createElement("div"),
            t === null || t === void 0 ? void 0 : t.setAttribute("slot", "firstAnswer"),
            t === null || t === void 0 ? void 0 : t.setAttribute("id", "sydFirstAnswer"),
            t.style.maxWidth = "648px",
            SydFSCHelper.setConfigs(n),
            SydFSCHelper.setEventListeners(),
            SydFSCHelper.setSydFSCEligibleState(!0),
            u = CIB.insertAt(y),
            vt && (SydWelcomeScreen === null || SydWelcomeScreen === void 0 ? void 0 : SydWelcomeScreen.setContent(u)),
            tf = SydFSCHelper.getConfigOrDefault((su = _w._sydConvConfig) === null || su === void 0 ? void 0 : su.isCompliantSydneyEndpointEnabled, !1),
            tf && (MsbSydneyHelper.addTenantLogoToHeader(),
            MsbSydneyHelper.disableTones()),
            rf = SydFSCHelper.getConfigOrDefault((hu = _w._sydConvConfig) === null || hu === void 0 ? void 0 : hu.useAccountLinkingForConversationLimitUpsell, !1),
            rf && (CIB.config.bing.signIn.query.action = "acclink",
            CIB.config.bing.signIn.query.crea = "MY04B",
            CIB.config.bing.signIn.query.pn = "AccountLinking_Chat",
            CIB.config.bing.signIn.query.publ = "BingIP"),
            u.setAttribute("alignment", "center"),
            hf && CIB.config.sydney.request.optionsSets.push("dlbing"),
            nf && CIB.config.sydney.request.optionsSets.push(nf),
            kt)
                SydFSCHelper.lastQuery = SydFSCHelper.getQuery().toLowerCase().trim();
            else {
                CIB.config.greeting.shouldSendBotGreeting = SydFSCHelper.shouldForceSendBotGreeting;
                oi || (sj_evt.bind("ajax.unload", function() {
                    SydFSCHelper.shouldResetBotGreeting = !1
                }),
                sj_evt.bind("ajax.load", function() {
                    SydFSCHelper.shouldResetBotGreeting = !0
                }));
                CIB.onConversationRequestStateChange(function(n) {
                    n || CIB.config.greeting.shouldSendBotGreeting || !SydFSCHelper.shouldResetBotGreeting || (CIB.config.greeting.shouldSendBotGreeting = !0)
                })
            }
            uf = SydFSCHelper.getConfigOrDefault((cu = _w._sydConvConfig) === null || cu === void 0 ? void 0 : cu.disResetTT, !1);
            uf && (bu = (au = (lu = u === null || u === void 0 ? void 0 : u.shadowRoot) === null || lu === void 0 ? void 0 : lu.querySelector("cib-action-bar")) === null || au === void 0 ? void 0 : au.shadowRoot,
            bu && (h = sj_ce("style"),
            h.textContent = "\n                    cib-tooltip {\n                        display: none !important;\n                    }\n                ",
            bu.appendChild(h)));
            SydFSCHelper.setTestMocks();
            dt && (ff = new URLSearchParams(_w.location.search),
            ku = ff.get("convid"),
            ku && ru(ku));
            i = (vu = _d.querySelector("cib-serp")) === null || vu === void 0 ? void 0 : vu.shadowRoot;
            p = i === null || i === void 0 ? void 0 : i.querySelector("cib-conversation");
            p && p.shadowRoot && (o = p.shadowRoot.querySelector(".scroller"),
            h = sj_ce("style"),
            sf && (h.textContent = "\n                cib-notification-container {\n                    display: none;\n                }\n            "),
            p.shadowRoot.appendChild(h));
            cf && (du = (pu = (yu = i === null || i === void 0 ? void 0 : i.querySelector("cib-action-bar")) === null || yu === void 0 ? void 0 : yu.shadowRoot) === null || pu === void 0 ? void 0 : pu.querySelector(".autosuggest-text"),
            du && (du.style.display = "none"));
            gu = "ontouchstart"in window || !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
            ef = c && (ci || li || ClientObserver.getBrowserWidth() < 780);
            gu && Log.Log("ClientInst", "Codex", "TouchD");
            e || ri || ei || ef || gu && fi || (sj_be(_w, "mousewheel", bi),
            sj_be(_w, "touchstart", ki),
            sj_be(_w, "touchmove", di),
            sj_be(_w, "touchend", gi),
            c && (sj_be(_w, "keydown", nr),
            sj_be(_w, "resize", tr)));
            SydFSCHelper.triggerShareFlow();
            pi();
            sj_evt.bind("ajax.load", pi);
            l && (SydFSCHelper.setupHistory(),
            SydFSCHelper.checkInitialState());
            lr();
            e && tu();
            SydFSCHelper.triggerClarity();
            CIB.onResetConversation(function() {
                SydFSCHelper.shouldMove1TAnswers(b, s) && wi()
            });
            if (CIB.onMobileUpsellPopupShown)
                CIB.onMobileUpsellPopupShown(function() {
                    var n = {
                        convId: CIB.manager.conversation.id
                    };
                    SydFSCHelper.SydLog("SystemEvent", "MobileUpsell", "MobileUpsellPopupShown", n);
                    SydFSCHelper.createRequest("sydchat/writeConvId", JSON.stringify(n))
                });
            si && SydFSCHelper.processCachedResponseUsingCIB(JSON.parse(hi))
        }
    }
    function pi() {
        sj_evt.bind("hideSydFSC", function(n) {
            var c, t, i, y, u, o, r, h;
            if (!rt) {
                if (rt = !0,
                Log.Log("ClientInst", "Codex", "LeaveConversationMode"),
                f || Lib.CssClass.remove(sj_b, g),
                c = _ge("sb_form"),
                c && Lib.CssClass.contains(c, "hassbi") && Lib.CssClass.remove(c, "hassbi"),
                CIB.hideConversation(),
                f || e || (Lib.CssClass.add(_d.documentElement, "b_delayOvflw"),
                SydFSCHelper.shouldMove1TAnswers(b, s) && wi(),
                t = _ge("b-scopeListItem-web"),
                t && t.children.length > 0 && (t.parentElement.removeAttribute("role"),
                t.children[0].setAttribute("aria-current", "page"),
                t.children[0].removeAttribute("aria-selected"),
                t.children[0].removeAttribute("role"),
                Lib.CssClass.add(t, "b_active"),
                _ge("b_skip_to_content").setAttribute("tabindex", "0")),
                i = _ge("b-scopeListItem-conv"),
                i && i.children.length > 0 && (i.children[0].removeAttribute("role"),
                i.children[0].removeAttribute("aria-selected"),
                i.children[0].setAttribute("aria-current", "false"),
                Lib.CssClass.remove(i, "b_active"))),
                _G[SydFSCHelper.SYD_PREV_MODE] != _G[SydFSCHelper.SYD_MODE] && (_G[SydFSCHelper.SYD_PREV_MODE] = _G[SydFSCHelper.SYD_MODE],
                l && (y = n && n.length > 1 ? n[1] : !1,
                y || SydFSCHelper.pushSydHistory(!1))),
                _G[SydFSCHelper.SYD_MODE] = "serp",
                ut) {
                    if (u = _ge("b_pole"),
                    !u) {
                        for (u = sj_ce("div", "b_pole"),
                        o = _d.querySelector("main"),
                        r = _ge("b_results"); r && o && r.parentElement != o; )
                            r = r.parentElement;
                        o && r && o.insertBefore(u, r)
                    }
                    SydFSCHelper.addCarousel(u)
                } else if (wt && (h = CIB.vm.conversation.model.messages.filter(function(n) {
                    return n.type === "meta" && n.text != "Generating answers for you..." || n.type === "text" && n.author === "user"
                }),
                h && h.length > 0)) {
                    var a = h[h.length - 1].text.split("`")
                      , v = a.length == 1 ? a[0] : a.length == 3 ? a[1] : ""
                      , p = _ge("sb_form_go")
                      , w = _ge("sb_form_q");
                    _w.sj_isAjax && v && w.value.toLowerCase() != v.toLowerCase() && p && (w.value = v,
                    SydFSCHelper.lastQuery = v,
                    p.click())
                }
                rt = !1
            }
        });
        sb_st(function() {
            sj_evt.bind("showSydFSC", br, !0)
        }, 0);
        sj_evt.fire("convInit:done")
    }
    function cr() {
        var n;
        r = ((n = _d.getElementsByClassName("b_top")) === null || n === void 0 ? void 0 : n.length) > 0 ? _d.getElementsByClassName("b_top")[0] : null;
        at = sj_b.querySelector("#b_sydTigerCont") != null;
        tt = !!r && r.querySelector("#sydwrap_wrapper") != null;
        k && (i = sj_b.querySelector("#sydwrap_wrapper #b_syd_sm_chat .b_wpt_chat"),
        i && (Lib.CssClass.add(i, yt),
        ni = i.querySelector(".b_wpt_creator_content") != null))
    }
    function lr() {
        var n = _ge("id_hbfo");
        sj_be(n, "click", function(n) {
            var r = n.target, t, i;
            _G[SydFSCHelper.SYD_MODE] == "conversation" && r && (t = ar(r),
            t && t.target != "_blank" && (i = "",
            t.href.indexOf("/profile/") >= 0 ? i = "profile" : t.href.indexOf("/account/") >= 0 && (i = "account"),
            SydFSCHelper.LogIntEvent("ConversationViewExit", "Conversation", {
                source: "ClickMenu",
                target: i
            })))
        })
    }
    function ar(n) {
        while (n != null) {
            if (n.tagName == "A" && Lib.CssClass.contains(n, "hb_section"))
                return n;
            n = n.parentElement
        }
        return null
    }
    function et(n, t, i) {
        i === void 0 && (i = !1);
        t && n && (i ? n.prepend(t) : n.appendChild(t))
    }
    function vr(n) {
        var u, f, e, o, s, h;
        if (!st) {
            et(_ge("b_sydtoporpole"), n);
            return
        }
        var l = _d.querySelector("cib-serp")
          , i = (f = (u = _d.querySelector("cib-serp")) === null || u === void 0 ? void 0 : u.shadowRoot) === null || f === void 0 ? void 0 : f.querySelector("cib-conversation")
          , r = (o = (e = i === null || i === void 0 ? void 0 : i.shadowRoot) === null || e === void 0 ? void 0 : e.querySelector(".scroller")) === null || o === void 0 ? void 0 : o.querySelector(".main cib-welcome-container")
          , c = (h = (s = i === null || i === void 0 ? void 0 : i.shadowRoot) === null || s === void 0 ? void 0 : s.querySelector(".scroller")) === null || h === void 0 ? void 0 : h.querySelector(".main");
        i === null || i === void 0 ? void 0 : i.appendChild(a);
        r ? r === null || r === void 0 ? void 0 : r.after(v) : c === null || c === void 0 ? void 0 : c.prepend(v);
        t === null || t === void 0 ? void 0 : t.appendChild(n);
        lt;
        et(l, t)
    }
    function yr() {
        if (cr(),
        k) {
            if (!i || ti && ni)
                return;
            (s || tt && !at) && sb_st(function() {
                vr(i)
            }, or)
        }
    }
    function wi() {
        if (k) {
            if (!i)
                return;
            var n = sj_b.querySelector("#sydwrap_wrapper #b_syd_sm_chat");
            n && !n.contains(i) && (Lib.CssClass.remove(i, yt),
            et(n, i, !0))
        }
    }
    function pr() {
        var n = new URLSearchParams(_w.location.search)
          , t = n.get("sendquery");
        return t === "1"
    }
    function wr() {
        var n = document.getElementById("conv-css-link");
        n.setAttribute("rel", "stylesheet")
    }
    function br(n) {
        var v, y, p, w, k, h, c, a, u, t, i, r, o, rt;
        if (!it) {
            it = !0;
            SydFSCHelper.updateResponseToneAfterSerp();
            CIB.config.features.enableAds = !0;
            gt && (k = CIB.config.sydney.request.optionsSets.indexOf("nocacheread"),
            k >= 0 && CIB.config.sydney.request.optionsSets.splice(k, 1));
            ai && wr();
            h = _ge("b_header");
            h && Lib.CssClass.contains(h, ot) && (Lib.CssClass.remove(h, ot),
            SydFSCHelper.LogIntEvent("ConversationViewEnter", "Scope", {
                source: "ShowConv"
            }));
            ut && SydFSCHelper.removeQueries();
            c = n && n.length > 1 ? n[1] : null;
            a = n && n.length > 2 ? n[2] : null;
            s = n && n.length > 3 ? n[3] == er : !1;
            var d = n && n.length > 5 ? n[5] : null
              , ft = n && n.length > 6 ? n[6] : !1
              , nt = n && n.length > 7 ? n[7] : !1;
            if (f || e || (_w.scrollY > 0 && _w.scrollTo(0, 0),
            Lib.CssClass.add(_d.documentElement, "b_disOvflw"),
            Lib.CssClass.remove(_d.documentElement, "b_delayOvflw")),
            f || Lib.CssClass.add(sj_b, g),
            SydFSCHelper.shouldMove1TAnswers(b, s, c) && yr(),
            c && SydFSCHelper.sendFirstQuery(c.toLowerCase().trim(), a, d, nt || pr()),
            CIB.showConversation(),
            ft && (u = [],
            d && u.push({
                author: "user",
                text: d
            }),
            a && u.push({
                author: "bot",
                text: a
            }),
            ct && u.length != 0 && CIB.registerContext(u),
            CIB.toggleSpeechEnabled(),
            CIB.triggerMic()),
            !f && !e && (t = _ge("b-scopeListItem-web"),
            t && t.children.length > 0 && (t.parentElement.setAttribute("role", "tablist"),
            t.children[0].setAttribute("aria-current", "false"),
            t.children[0].setAttribute("aria-selected", "false"),
            t.children[0].setAttribute("role", "tab"),
            Lib.CssClass.remove(t, "b_active")),
            i = _ge("b-scopeListItem-conv"),
            i && i.children.length > 0 && (i.children[0].setAttribute("aria-current", "page"),
            i.children[0].setAttribute("role", "tab"),
            i.children[0].setAttribute("aria-selected", "true"),
            Lib.CssClass.add(i, "b_active"),
            _ge("b_skip_to_content").setAttribute("tabindex", "-1")),
            r = _d.querySelector(".b_sydConvMode"),
            o = (w = (p = (y = (v = r === null || r === void 0 ? void 0 : r.querySelector("cib-serp")) === null || v === void 0 ? void 0 : v.shadowRoot) === null || y === void 0 ? void 0 : y.querySelector("cib-action-bar")) === null || p === void 0 ? void 0 : p.shadowRoot) === null || w === void 0 ? void 0 : w.querySelector(".input-container .text-input textarea"),
            o && !nt && o.focus(),
            r && o && nt)) {
                sj_be(r, "keyup", tt);
                function tt(n) {
                    (n.code == "Tab" || n.keyCode == 9 || n.key == "Tab") && o.focus();
                    r.removeEventListener("keyup", tt)
                }
            }
            _G[SydFSCHelper.SYD_PREV_MODE] != _G[SydFSCHelper.SYD_MODE] && (_G[SydFSCHelper.SYD_PREV_MODE] = _G[SydFSCHelper.SYD_MODE],
            l && (rt = n && n.length > 4 ? n[4] : !1,
            rt || SydFSCHelper.pushSydHistory(!0)));
            vi || kr();
            _G[SydFSCHelper.SYD_MODE] = "conversation";
            it = !1
        }
    }
    function kr() {
        var n = ClientObserver.getBrowserWidth()
          , t = ClientObserver.getBrowserHeight();
        SydFSCHelper.set2TQueryConfigs(n, t, ii)
    }
    function bi(n) {
        var t = 0;
        n || (n = window.event);
        n.wheelDelta ? t = n.wheelDelta / 60 : n.detail && (t = -n.detail / 2);
        rr(t, nt)
    }
    function ki(n) {
        ft = n.changedTouches[0].clientY;
        d = n.touches && n.touches.length > 1 ? !0 : !1
    }
    function di(n) {
        var t = n.changedTouches[0].clientY - ft;
        rr(t, fr, !0)
    }
    function gi(n) {
        h = 0;
        y = !1;
        p = !1;
        ft = 0;
        d = n.touches && n.touches.length !== 0
    }
    function nr() {
        ci = !0;
        c && (ir(),
        sj_ue(_w, "keydown", nr))
    }
    function tr() {
        li = !0;
        c && (ir(),
        sj_ue(_w, "resize", tr))
    }
    function ir() {
        sj_ue(_w, "mousewheel", bi);
        sj_ue(_w, "touchstart", ki);
        sj_ue(_w, "touchmove", di);
        sj_ue(_w, "touchend", gi)
    }
    function dr() {
        var n = _ge("b_sydConvCont");
        n && Lib.CssClass.contains(document.body, "b_sydConvMode") && Lib.CssClass.add(_ge("b_content"), "b_hide")
    }
    function gr() {
        var n = _ge("b_sydConvCont");
        n && Lib.CssClass.contains(document.body, "b_sydConvMode") && Lib.CssClass.remove(_ge("b_content"), "b_hide")
    }
    function rr(n, t, i) {
        i === void 0 && (i = !1);
        sb_ct(pt);
        y || (w = Lib.CssClass.contains(sj_b, g),
        p = w ? nu() : _w.scrollY == 0);
        y = !0;
        p && (h += n);
        i || (pt = sb_st(function() {
            h = 0;
            y = !1;
            p = !1
        }, 150));
        !w && h > t && _G[SydFSCHelper.SYD_MODE] != "conversation" && !d ? (SydFSCHelper.LogIntEvent("ConversationViewEnter", "Scope", {
            source: "ScrollUp"
        }),
        SydFSCHelper.triggerSydFSCQueryWithContext()) : ht && w && h < -1 * t && _G[SydFSCHelper.SYD_MODE] == "conversation" && !ui && !d && (SydFSCHelper.LogIntEvent("ConversationViewExit", "Scope", {
            source: "ScrollDown",
            target: _G[SydFSCHelper.SYD_PREV_MODE]
        }),
        sj_evt.fire("hideSydFSC"),
        sb_st(function() {
            _w.scrollTo(0, 0)
        }, 1))
    }
    function nu() {
        return !o ? !1 : Math.abs(o.scrollTop - (o.scrollHeight - o.offsetHeight)) < 1
    }
    function tu() {
        var t, i, r, e = _ge("b_sydOvrClose"), n, u, f;
        e && sj_be(e, "click", function() {
            sj_evt.fire("hideSydFSC")
        });
        n = (r = (i = (t = _d.querySelector("#b_sydConvCont cib-serp")) === null || t === void 0 ? void 0 : t.shadowRoot) === null || i === void 0 ? void 0 : i.querySelector("cib-action-bar")) === null || r === void 0 ? void 0 : r.shadowRoot;
        u = n === null || n === void 0 ? void 0 : n.querySelector(".outside-left-container");
        u && (u.style.display = "none");
        bt && n && (f = sj_ce("style"),
        f.textContent = "\n                .control.microphone {\n                    display: none;\n                }\n            ",
        n.appendChild(f))
    }
    function iu(n, t) {
        var i, r;
        n === void 0 && (n = null);
        t === void 0 && (t = nt);
        r = (i = _w._sydPayWallConfig) === null || i === void 0 ? void 0 : i.loadSydneyConvResWithPayWall;
        r ? sj_evt.bind("waitlistUpdate:eligible", yi, !0) : yi(n);
        nt = t
    }
    function ru(n) {
        CIB.loadConversation(n);
        SydFSCHelper.lastQuery = SydFSCHelper.getQuery().toLowerCase().trim()
    }
    var g = "b_sydConvMode", ot = "b_sydShowConv", ur = "b_sydConvCont", nt = 10, fr = 100, st, ht, ct, l, lt = !1, r, tt, i = null, at = !1, u, vt, o, t, a, v, er = "SYDX_WRAPPER", s = !1, yt = "b_sydxwrappedanswer", or = 1e3, it = !1, rt = !1, h = 0, pt, y = !1, p = !1, w = !1, sr = !1, b = !1, wt = !1, ut = !1, f = !1, e = !1, ft, k = !1, bt = !1, kt = !1, dt = !1, hr = !1, gt = !1, ni = !1, ti = !1, ii = !1, ri = !1, ui = !1, c = !1, fi = !1, ei = !1, oi = !1, si = !1, hi = "", ci = !1, li = !1, d = !1, ai, vi = !1;
    (typeof sj_b == "undefined" || sj_b == null) && (window.sj_b = document.body);
    n.initWithWaitlistUpdate = iu;
    sj_evt.fire("sydFSC.init");
    sj_be(_w, "beforeprint", dr);
    sj_be(_w, "afterprint", gr)
}
)(SydneyFullScreenConv || (SydneyFullScreenConv = {}))
