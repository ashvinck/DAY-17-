////call back hell
const hell = document.querySelector(".hell"); //declaring a constant


setTimeout(() => {
    hell.innerText = "10";

    setTimeout(() => {
        hell.innerText = "9";

        setTimeout(() => {
            hell.innerText = "8";

            setTimeout(() => {
                hell.innerText = "7";

                setTimeout(() => {
                    hell.innerText = "6";

                    setTimeout(() => {
                        hell.innerText = "5";

                        setTimeout(() => {
                            hell.innerText = "4";

                            setTimeout(() => {
                                hell.innerText = "3";

                                setTimeout(() => {
                                    hell.innerText = "2";

                                    setTimeout(() => {
                                        hell.innerText = "1";

                                        setTimeout(() => {
                                            hell.innerText = "Happy Independence Day!"; ///Displaying the required text

                                        }, 1000);

                                    }, 1000);

                                }, 1000);

                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);
    }, 1000);
}, 1000);
