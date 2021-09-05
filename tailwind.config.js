module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode: false,
    theme: {
        colors: {},
        extend: {
            colors: {
                't_black': '#384359',
                't_green': '#008c8d',
                'b-header': '#6bc2c3',
                'b-footer': '#262c3a',
                'p_green': "#c5eaea",
                'ph_green': "#2bb9ba",
                'd_green': "#c5eaea",
                'white': '#ffffff',
            },
            backgroundImage: (theme) =>({
                "bg_pc_about": "url('/bg-about.png')",
                "bg_pc_skills":"url('/bg-skills.png')",
                "bg_pc_future":"url('/bg-future.png')",
            }),
            fontFamily: {
                lato: ["Lato"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}