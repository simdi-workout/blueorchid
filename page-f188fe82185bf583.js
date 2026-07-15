(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    5250: (e, t, a) => {
        "use strict";
        a.r(t),
        a.d(t, {
            default: () => A
        });
        var r = a(5155)
          , s = a(2115)
          , i = a(8126)
          , n = a.n(i)
          , l = a(5695);
        let o = () => {
            let e = (0,
            l.useRouter)();
            return (0,
            r.jsxs)("div", {
                className: "relative h-screen flex items-center justify-center overflow-hidden mt-[50px]",
                children: [(0,
                r.jsx)("div", {
                    className: "absolute inset-0 bg-cover bg-center",
                    style: {
                        backgroundImage: 'url("https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1600")',
                        filter: "brightness(0.6)"
                    }
                }), (0,
                r.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-600/60 animate-gradient-x"
                }), (0,
                r.jsxs)("div", {
                    className: "container mx-auto px-4 md:px-8 relative z-10 text-center",
                    children: [(0,
                    r.jsx)("h1", {
                        className: "text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fadeIn",
                        children: "Discover Your Beauty Potential"
                    }), (0,
                    r.jsx)("p", {
                        className: "text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fadeIn animation-delay-200",
                        children: "Professional beauty courses taught by industry experts to help you master the art of beauty"
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-400",
                        children: [(0,
                        r.jsx)("button", {
                            onClick: () => e.push("/courses"),
                            className: "bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105",
                            children: "Explore Courses"
                        }), (0,
                        r.jsx)("button", {
                            onClick: () => e.push("/about"),
                            className: "bg-transparent border-2 border-white hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all duration-300",
                            children: "Learn More"
                        })]
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",
                    children: (0,
                    r.jsx)("div", {
                        className: "w-8 h-12 rounded-full border-2 border-white flex items-start justify-center",
                        children: (0,
                        r.jsx)("div", {
                            className: "w-1 h-3 bg-white rounded-full mt-2 animate-scrollDown"
                        })
                    })
                })]
            })
        }
        ;
        var c = a(6766);
        let d = e => {
            let {title: t, description: a, rating: s, students: i, category: n, image: l} = e;
            return (0,
            r.jsx)("div", {
                className: "bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300",
                children: (0,
                r.jsxs)("div", {
                    className: "flex flex-col items-center p-6 text-center",
                    children: [(0,
                    r.jsx)("div", {
                        className: "relative bg-pink-100 w-20 h-20 rounded-full overflow-hidden mb-4 shadow-inner",
                        children: (0,
                        r.jsx)(c.default, {
                            src: l,
                            alt: t,
                            fill: !0,
                            className: "object-cover"
                        })
                    }), (0,
                    r.jsx)("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-1",
                        children: t
                    }), (0,
                    r.jsxs)("p", {
                        className: "text-sm text-gray-500 mb-2",
                        children: ["by ", a]
                    }), (0,
                    r.jsx)("div", {
                        className: "text-xs uppercase tracking-wider text-pink-600 font-medium mb-2",
                        children: n
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex items-center gap-1 text-sm text-gray-700",
                        children: [(0,
                        r.jsx)("span", {
                            className: "text-yellow-400",
                            children: "★"
                        }), (0,
                        r.jsx)("span", {
                            children: s
                        }), (0,
                        r.jsxs)("span", {
                            className: "text-gray-400",
                            children: ["(", i, " students)"]
                        })]
                    })]
                })
            })
        }
          , u = [{
            id: "nail-art-101",
            title: "Nail Art Fundamentals",
            description: "Basic skills and techniques for crafting creative, polished designs on fingernails using color, tools, and embellishments.",
            price: 89.99,
            rating: 4.8,
            students: 1245,
            category: "nails",
            image: "/nail-art.jpg"
        }, {
            id: "advanced-nails",
            title: "Advanced Nail Techniques",
            description: "Learn advanced nail art methods, including sculpting, extensions, and 3D designs.",
            price: 129.99,
            rating: 4.9,
            students: 876,
            category: "nails",
            image: "/advanced-nails.jpg"
        }, {
            id: "hair-styling",
            title: "Modern Hair Styling",
            description: "Techniques for cutting, coloring, and styling hair to achieve on-trend looks.",
            price: 99.99,
            rating: 4.7,
            students: 1532,
            category: "hair",
            image: "/hair-styling.jpg"
        }, {
            id: "bridal-makeup",
            title: "Professional Makeup",
            description: "Master bridal and editorial makeup looks with step-by-step tutorials and live demos.",
            price: 149.99,
            rating: 4.9,
            students: 2103,
            category: "makeup",
            image: "/bridal-makeup.jpg"
        }, {
            id: "skincare-basics",
            title: "Skincare Fundamentals",
            description: "Understand skin types, product formulations, and daily routines for healthy, glowing skin.",
            price: 79.99,
            rating: 4.6,
            students: 1897,
            category: "skincare",
            image: "/skincare.jpg"
        }, {
            id: "pro-makeup",
            title: "Skin Cosmetology",
            description: "Dive into advanced skin treatments, corrective makeup, and cosmetic chemistry.",
            price: 119.99,
            rating: 4.8,
            students: 1420,
            category: "skin",
            image: "/careskin.jpg"
        }]
          , m = () => {
            let[e,t] = (0,
            s.useState)("all")
              , a = (0,
            l.useRouter)()
              , i = "all" === e ? u : u.filter(t => t.category === e);
            return (0,
            r.jsx)("section", {
                id: "courses",
                className: "py-20 bg-gray-50",
                children: (0,
                r.jsxs)("div", {
                    className: "container mx-auto px-4 md:px-8",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [(0,
                        r.jsxs)("h2", {
                            className: "text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4",
                            children: ["Our ", (0,
                            r.jsx)("span", {
                                className: "text-pink-500",
                                children: "Featured"
                            }), " Courses"]
                        }), (0,
                        r.jsx)("p", {
                            className: "text-gray-600 max-w-2xl mx-auto",
                            children: "Discover our professionally designed courses to help you master the latest beauty techniques and start your career in the beauty industry."
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: "flex flex-wrap justify-center gap-3 mb-12",
                        children: [{
                            id: "all",
                            name: "All Courses"
                        }, {
                            id: "nails",
                            name: "Nail Art"
                        }, {
                            id: "hair",
                            name: "Hair Styling"
                        }, {
                            id: "makeup",
                            name: "Makeup"
                        }, {
                            id: "skincare",
                            name: "Skincare"
                        }].map(a => (0,
                        r.jsx)("button", {
                            onClick: () => t(a.id),
                            className: "px-6 py-2 rounded-full transition-all duration-300 ".concat(e === a.id ? "bg-pink-400 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100"),
                            children: a.name
                        }, a.id))
                    }), (0,
                    r.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: i.map(e => (0,
                        r.jsx)(d, {
                            title: e.title,
                            description: e.description,
                            rating: e.rating,
                            students: e.students,
                            category: e.category,
                            image: e.image
                        }, e.id))
                    }), (0,
                    r.jsx)("div", {
                        className: "text-center mt-12",
                        children: (0,
                        r.jsx)("button", {
                            onClick: () => a.push("/courses"),
                            className: "px-8 py-3 border-2 border-pink-400 text-pink-500 hover:bg-pink-400 hover:text-white rounded-full font-medium transition-all duration-300",
                            children: "View All Courses"
                        })
                    })]
                })
            })
        }
          , h = [{
            id: 1,
            title: "Expert Instructors",
            description: "Learn from industry professionals with years of experience in the beauty industry.",
            image: "/expert-instructors.png"
        }, {
            id: 2,
            title: "Flexible Learning",
            description: "Access course materials anytime, anywhere. Learn at your own pace with our structured curriculum.",
            image: "/flexible-learning.png"
        }, {
            id: 3,
            title: "Hands-on Practice",
            description: "Apply what you learn with practical exercises and real-world projects to build your portfolio.",
            image: "/hands-on-practice.png"
        }, {
            id: 4,
            title: "Industry Certification",
            description: "Earn recognized certificates that validate your skills and boost your career prospects.",
            image: "/pro-makeup.jpg"
        }]
          , x = () => (0,
        r.jsx)("section", {
            id: "about",
            className: "py-20 bg-gray-50",
            children: (0,
            r.jsxs)("div", {
                className: "container mx-auto px-4 md:px-8",
                children: [(0,
                r.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [(0,
                    r.jsxs)("h2", {
                        className: "text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4",
                        children: ["Why Choose ", (0,
                        r.jsx)("span", {
                            className: "text-pink-500",
                            children: "BLUE ORCHID"
                        })]
                    }), (0,
                    r.jsx)("p", {
                        className: "text-gray-600 max-w-2xl mx-auto",
                        children: "We offer the most comprehensive and affordable Beauty Education with a focus on practical skills and industry standards."
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: h.map(e => (0,
                    r.jsxs)("div", {
                        className: "bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                        children: [(0,
                        r.jsx)("div", {
                            className: "mb-6 bg-pink-100 w-16 h-16 rounded-full overflow-hidden relative",
                            children: (0,
                            r.jsx)(c.default, {
                                src: e.image,
                                alt: e.title,
                                fill: !0,
                                className: "object-cover"
                            })
                        }), (0,
                        r.jsx)("h3", {
                            className: "text-xl font-serif font-bold text-gray-800 mb-3",
                            children: e.title
                        }), (0,
                        r.jsx)("p", {
                            className: "text-gray-600",
                            children: e.description
                        })]
                    }, e.id))
                })]
            })
        });
        var p = a(9946);
        let g = (0,
        p.A)("chevron-left", [["path", {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }]])
          , y = (0,
        p.A)("chevron-right", [["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]])
          , f = (0,
        p.A)("pause", [["rect", {
            x: "14",
            y: "4",
            width: "4",
            height: "16",
            rx: "1",
            key: "zuxfzm"
        }], ["rect", {
            x: "6",
            y: "4",
            width: "4",
            height: "16",
            rx: "1",
            key: "1okwgv"
        }]])
          , b = (0,
        p.A)("play", [["polygon", {
            points: "6 3 20 12 6 21 6 3",
            key: "1oa8hb"
        }]])
          , j = (0,
        p.A)("volume-x", [["path", {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw"
        }], ["line", {
            x1: "22",
            x2: "16",
            y1: "9",
            y2: "15",
            key: "1ewh16"
        }], ["line", {
            x1: "16",
            x2: "22",
            y1: "9",
            y2: "15",
            key: "5ykzw1"
        }]])
          , w = (0,
        p.A)("volume-2", [["path", {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw"
        }], ["path", {
            d: "M16 9a5 5 0 0 1 0 6",
            key: "1q6k2b"
        }], ["path", {
            d: "M19.364 18.364a9 9 0 0 0 0-12.728",
            key: "ijwkga"
        }]])
          , v = [{
            id: "DnUvxoukKIA",
            quote: "This course changed my career completely! Highly recommended.",
            name: "Priya Sharma"
        }, {
            id: "n9cR3TBP_bc",
            quote: "Trainers were so supportive. I gained real confidence.",
            name: "Anjali Verma"
        }, {
            id: "c-TjwhDW41E",
            quote: "I loved the hands-on sessions. Super helpful!",
            name: "Sneha Joshi"
        }]
          , k = () => {
            let[e,t] = (0,
            s.useState)(0)
              , [a,i] = (0,
            s.useState)(!0)
              , [n,l] = (0,
            s.useState)(!0)
              , o = (0,
            s.useRef)([])
              , c = (0,
            s.useRef)(a)
              , d = (0,
            s.useRef)(n);
            (0,
            s.useEffect)( () => {
                c.current = a,
                d.current = n
            }
            , [a, n]),
            (0,
            s.useEffect)( () => {
                if (window.YT)
                    m();
                else {
                    var e;
                    let t = document.createElement("script");
                    t.src = "https://www.youtube.com/iframe_api";
                    let a = document.getElementsByTagName("script")[0];
                    null == a || null == (e = a.parentNode) || e.insertBefore(t, a),
                    window.onYouTubeIframeAPIReady = m
                }
            }
            , []);
            let u = (0,
            s.useCallback)( () => {
                h()
            }
            , [e])
              , m = () => {
                o.current = v.map( (t, a) => new window.YT.Player("player-".concat(a),{
                    videoId: t.id,
                    playerVars: {
                        autoplay: +(0 === a),
                        mute: 1,
                        controls: 0,
                        modestbranding: 1,
                        rel: 0
                    },
                    events: {
                        onReady: e => {
                            0 === a && e.target.playVideo()
                        }
                        ,
                        onStateChange: t => {
                            0 === t.data && a === e && u()
                        }
                    }
                }))
            }
              , h = (0,
            s.useCallback)( () => {
                let a = o.current[e];
                a && a.pauseVideo();
                let r = (e + 1) % v.length;
                t(r),
                setTimeout( () => {
                    let e = o.current[r];
                    e && (d.current ? e.mute() : e.unMute(),
                    c.current && e.playVideo())
                }
                , 500)
            }
            , [e])
              , x = (0,
            s.useCallback)( () => {
                let a = o.current[e];
                a && a.pauseVideo();
                let r = (e - 1 + v.length) % v.length;
                t(r),
                setTimeout( () => {
                    let e = o.current[r];
                    e && (d.current ? e.mute() : e.unMute(),
                    c.current && e.playVideo())
                }
                , 500)
            }
            , [e]);
            return (0,
            r.jsxs)("div", {
                className: "bg-white py-14 px-4",
                children: [(0,
                r.jsx)("h2", {
                    className: "text-3xl font-bold text-center text-black mb-8",
                    children: "What Our Students Say"
                }), (0,
                r.jsxs)("div", {
                    className: "relative w-full max-w-xl aspect-video mx-auto overflow-hidden rounded-xl shadow-xl",
                    children: [v.map( (t, a) => (0,
                    r.jsx)("div", {
                        className: "absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ".concat(a === e ? "opacity-100 z-10" : "opacity-0 z-0"),
                        children: (0,
                        r.jsx)("div", {
                            id: "player-".concat(a),
                            className: "w-full h-full"
                        })
                    }, a)), (0,
                    r.jsx)("button", {
                        onClick: x,
                        className: "absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white hover:bg-gray-800 rounded-full p-2 shadow-md z-20",
                        children: (0,
                        r.jsx)(g, {
                            size: 24
                        })
                    }), (0,
                    r.jsx)("button", {
                        onClick: h,
                        className: "absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white hover:bg-gray-800 rounded-full p-2 shadow-md z-20",
                        children: (0,
                        r.jsx)(y, {
                            size: 24
                        })
                    }), (0,
                    r.jsx)("button", {
                        onClick: () => {
                            let t = o.current[e];
                            t && (a ? t.pauseVideo() : t.playVideo()),
                            i(e => !e)
                        }
                        ,
                        className: "absolute left-2 bottom-2 bg-black text-white hover:bg-gray-800 rounded-full p-2 shadow z-20",
                        children: a ? (0,
                        r.jsx)(f, {
                            size: 20
                        }) : (0,
                        r.jsx)(b, {
                            size: 20
                        })
                    }), (0,
                    r.jsx)("button", {
                        onClick: () => {
                            let t = o.current[e];
                            t && (n ? t.unMute() : t.mute()),
                            l(e => !e)
                        }
                        ,
                        className: "absolute right-2 bottom-2 bg-black text-white hover:bg-gray-800 rounded-full p-2 shadow z-20",
                        children: n ? (0,
                        r.jsx)(j, {
                            size: 20
                        }) : (0,
                        r.jsx)(w, {
                            size: 20
                        })
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "text-center mt-6",
                    children: [(0,
                    r.jsxs)("p", {
                        className: "italic text-gray-700 mb-1",
                        children: ["“", v[e].quote, "”"]
                    }), (0,
                    r.jsxs)("p", {
                        className: "font-semibold text-black",
                        children: ["– ", v[e].name]
                    })]
                })]
            })
        }
          , N = () => {
            let[e,t] = (0,
            s.useState)({
                name: "",
                instagram: "",
                course: "",
                message: ""
            })
              , a = e => {
                let {id: a, value: r} = e.target;
                t(e => ({
                    ...e,
                    [a]: r
                }))
            }
            ;
            return (0,
            r.jsx)("section", {
                id: "contact",
                className: "py-20 bg-gray-50",
                children: (0,
                r.jsx)("div", {
                    className: "container mx-auto px-4 md:px-8",
                    children: (0,
                    r.jsxs)("div", {
                        className: "max-w-4xl mx-auto text-center",
                        children: [(0,
                        r.jsx)("h2", {
                            className: "text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6",
                            children: "Ready to Transform Your Beauty Skills?"
                        }), (0,
                        r.jsx)("p", {
                            className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto",
                            children: "Join thousands of students who have launched successful careers in the beauty industry with our expert-led courses."
                        }), (0,
                        r.jsx)("div", {
                            className: "bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200",
                            children: (0,
                            r.jsxs)("form", {
                                className: "space-y-6",
                                onSubmit: t => {
                                    t.preventDefault();
                                    let {name: a, instagram: r, course: s, message: i} = e
                                      , n = "\n*\uD83C\uDF93 Course Inquiry Form Submission*\n\n\uD83D\uDC64 Name: ".concat(a, "\n\uD83D\uDCE7 Instgram Url: ").concat(r, "\n\uD83D\uDCD8 Interested Course: ").concat(s, "\n\uD83D\uDCDD Message: ").concat(i || "No additional message", "\n\nPlease reach out with more details. Thank you!\n    ")
                                      , l = "https://wa.me/919672128525?text=".concat(encodeURIComponent(n));
                                    window.open(l, "_blank"),
                                    alert("Opening WhatsApp. Please confirm your message.")
                                }
                                ,
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        children: [(0,
                                        r.jsx)("label", {
                                            htmlFor: "name",
                                            className: "block text-gray-700 text-sm font-medium mb-2",
                                            children: "Full Name"
                                        }), (0,
                                        r.jsx)("input", {
                                            type: "text",
                                            id: "name",
                                            value: e.name,
                                            onChange: a,
                                            className: "w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400",
                                            placeholder: "Enter your name",
                                            required: !0
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        children: [(0,
                                        r.jsx)("label", {
                                            htmlFor: "Instagram Link",
                                            className: "block text-gray-700 text-sm font-medium mb-2",
                                            children: "Instagram Link"
                                        }), (0,
                                        r.jsx)("input", {
                                            type: "instgarm",
                                            id: "instgram",
                                            value: e.instagram,
                                            onChange: a,
                                            className: "w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400",
                                            placeholder: "Enter your Instagram",
                                            required: !0
                                        })]
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    children: [(0,
                                    r.jsx)("label", {
                                        htmlFor: "course",
                                        className: "block text-gray-700 text-sm font-medium mb-2",
                                        children: "Interested Course"
                                    }), (0,
                                    r.jsxs)("select", {
                                        id: "course",
                                        value: e.course,
                                        onChange: a,
                                        className: "w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400",
                                        required: !0,
                                        children: [(0,
                                        r.jsx)("option", {
                                            value: "",
                                            children: "Select a course"
                                        }), (0,
                                        r.jsx)("option", {
                                            value: "Professional Nail Art",
                                            children: "Professional Nail Art"
                                        }), (0,
                                        r.jsx)("option", {
                                            value: "Advanced Hair Styling",
                                            children: "Advanced Hair Styling"
                                        }), (0,
                                        r.jsx)("option", {
                                            value: "Professional Makeup Artistry",
                                            children: "Professional Makeup Artistry"
                                        }), (0,
                                        r.jsx)("option", {
                                            value: "Skincare Specialist",
                                            children: "Skincare Specialist"
                                        })]
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    children: [(0,
                                    r.jsx)("label", {
                                        htmlFor: "message",
                                        className: "block text-gray-700 text-sm font-medium mb-2",
                                        children: "Message (Optional)"
                                    }), (0,
                                    r.jsx)("textarea", {
                                        id: "message",
                                        value: e.message,
                                        onChange: a,
                                        rows: 4,
                                        className: "w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400",
                                        placeholder: "Any questions or special requirements?"
                                    })]
                                }), (0,
                                r.jsx)("button", {
                                    type: "submit",
                                    className: "w-full bg-pink-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors duration-300 transform hover:scale-[1.01]",
                                    children: "Request Course Information"
                                })]
                            })
                        })]
                    })
                })
            })
        }
          , A = () => (0,
        r.jsxs)(r.Fragment, {
            children: [(0,
            r.jsxs)(n(), {
                children: [(0,
                r.jsx)("title", {
                    children: "Blue Orchid Academy | Master Beauty Techniques & Services"
                }), (0,
                r.jsx)("meta", {
                    name: "description",
                    content: "Blue Orchid Academy offers professional beauty courses—Microblading, Hydra Facial, Lash Lifting, Skincare, and more. Join us to transform your passion into a thriving career."
                }), (0,
                r.jsx)("meta", {
                    name: "keywords",
                    content: "beauty academy, microblading course, hydra facial training, lash lifting, skincare certification, permanent makeup, nail art diploma"
                }), (0,
                r.jsx)("meta", {
                    name: "robots",
                    content: "index, follow"
                }), (0,
                r.jsx)("link", {
                    rel: "canonical",
                    href: "https://yourdomain.com/"
                }), (0,
                r.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }), (0,
                r.jsx)("meta", {
                    property: "og:title",
                    content: "Blue Orchid Academy | Master Beauty Techniques & Services"
                }), (0,
                r.jsx)("meta", {
                    property: "og:description",
                    content: "Discover world-class beauty courses—Microblading, Hydra Facial, Lash Lifting, and more—at Blue Orchid Academy. Enroll today!"
                }), (0,
                r.jsx)("meta", {
                    property: "og:url",
                    content: "https://yourdomain.com/"
                }), (0,
                r.jsx)("meta", {
                    property: "og:site_name",
                    content: "Blue Orchid Beauty & Wellness Academy"
                }), (0,
                r.jsx)("meta", {
                    property: "og:image",
                    content: "https://yourdomain.com/og-homepage.jpg"
                }), (0,
                r.jsx)("meta", {
                    property: "og:image:alt",
                    content: "Blue Orchid Academy Courses"
                }), (0,
                r.jsx)("meta", {
                    property: "og:locale",
                    content: "en_US"
                }), (0,
                r.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), (0,
                r.jsx)("meta", {
                    name: "twitter:title",
                    content: "Blue Orchid Academy | Master Beauty Techniques & Services"
                }), (0,
                r.jsx)("meta", {
                    name: "twitter:description",
                    content: "Join Blue Orchid Academy for premier beauty courses—Microblading, Hydra Facial, Lash Lifting, Skincare, and more. Enroll now!"
                }), (0,
                r.jsx)("meta", {
                    name: "twitter:image",
                    content: "https://yourdomain.com/twitter-homepage.jpg"
                }), (0,
                r.jsx)("meta", {
                    name: "twitter:creator",
                    content: "@blue_orchid_academy"
                })]
            }), (0,
            r.jsxs)("main", {
                id: "home",
                children: [(0,
                r.jsx)(o, {}), (0,
                r.jsx)(m, {}), (0,
                r.jsx)(x, {}), (0,
                r.jsx)(k, {}), (0,
                r.jsx)(N, {})]
            })]
        })
    }
    ,
    5695: (e, t, a) => {
        "use strict";
        var r = a(8999);
        a.o(r, "useRouter") && a.d(t, {
            useRouter: function() {
                return r.useRouter
            }
        })
    }
    ,
    7676: (e, t, a) => {
        Promise.resolve().then(a.bind(a, 5250))
    }
    ,
    8126: (e, t) => {
        "use strict";
        function a() {
            return null
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    9946: (e, t, a) => {
        "use strict";
        a.d(t, {
            A: () => u
        });
        var r = a(2115);
        let s = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , i = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, a) => a ? a.toUpperCase() : t.toLowerCase())
          , n = e => {
            let t = i(e);
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
          , l = function() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            return t.filter( (e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t).join(" ").trim()
        }
          , o = e => {
            for (let t in e)
                if (t.startsWith("aria-") || "role" === t || "title" === t)
                    return !0
        }
        ;
        var c = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let d = (0,
        r.forwardRef)( (e, t) => {
            let {color: a="currentColor", size: s=24, strokeWidth: i=2, absoluteStrokeWidth: n, className: d="", children: u, iconNode: m, ...h} = e;
            return (0,
            r.createElement)("svg", {
                ref: t,
                ...c,
                width: s,
                height: s,
                stroke: a,
                strokeWidth: n ? 24 * Number(i) / Number(s) : i,
                className: l("lucide", d),
                ...!u && !o(h) && {
                    "aria-hidden": "true"
                },
                ...h
            }, [...m.map(e => {
                let[t,a] = e;
                return (0,
                r.createElement)(t, a)
            }
            ), ...Array.isArray(u) ? u : [u]])
        }
        )
          , u = (e, t) => {
            let a = (0,
            r.forwardRef)( (a, i) => {
                let {className: o, ...c} = a;
                return (0,
                r.createElement)(d, {
                    ref: i,
                    iconNode: t,
                    className: l("lucide-".concat(s(n(e))), "lucide-".concat(e), o),
                    ...c
                })
            }
            );
            return a.displayName = n(e),
            a
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [766, 441, 684, 358], () => t(7676)),
    _N_E = e.O()
}
]);
