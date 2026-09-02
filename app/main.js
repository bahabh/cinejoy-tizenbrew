(function openCinejoy() {

    var cinejoyUrl = "https://cinejoy.to/";

    var tvInput =
        window.tizen &&
        window.tizen.tvinputdevice;

    var attempted = false;


    function registerKey(keyName) {

        if (
            tvInput &&
            typeof tvInput.registerKey === "function"
        ) {

            try {
                tvInput.registerKey(keyName);
            } catch (_) {}

        }

    }


    function makeFreshUrl() {

        try {

            var url = new URL(cinejoyUrl);

            /*
             * Cache-buster.
             * This prevents an old Cinejoy page from
             * being reused by the TV browser.
             */

            url.searchParams.set(
                "_tizenbrew",
                String(Date.now())
            );

            return url.toString();

        } catch (_) {

            return cinejoyUrl +
                "?_tizenbrew=" +
                encodeURIComponent(
                    String(Date.now())
                );

        }

    }


    var launchUrl = makeFreshUrl();


    function fallback() {

        var link =
            document.getElementById(
                "fallback-link"
            );

        if (!link) {
            return;
        }

        link.href = launchUrl;

        try {
            link.click();
        } catch (_) {}

    }


    function launch() {

        if (attempted) {
            return;
        }

        attempted = true;


        /*
         * Register Samsung media keys.
         */

        [
            "MediaPlay",
            "MediaPause",
            "MediaPlayPause",
            "MediaStop",
            "MediaFastForward",
            "MediaRewind",
            "MediaTrackPrevious",
            "MediaTrackNext"
        ].forEach(registerKey);


        /*
         * First attempt.
         */

        try {

            window.location.replace(
                launchUrl
            );

        } catch (_) {}


        /*
         * Second attempt.
         */

        window.setTimeout(function () {

            try {

                if (
                    String(window.location.href)
                        .indexOf("cinejoy.to") === -1
                ) {

                    window.location.href =
                        launchUrl;

                }

            } catch (_) {}

        }, 250);


        /*
         * Final fallback:
         * simulate clicking a normal link.
         */

        window.setTimeout(function () {

            try {

                if (
                    String(window.location.href)
                        .indexOf("cinejoy.to") === -1
                ) {

                    fallback();

                }

            } catch (_) {}

        }, 700);

    }


    /*
     * Start as soon as possible.
     */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            launch,
            { once: true }
        );

    } else {

        launch();

    }


    /*
     * Extra startup attempt.
     */

    window.setTimeout(
        launch,
        0
    );

})();
