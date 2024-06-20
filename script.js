// Miro SDK initialization and pop-up logic here
miro.onReady(() => {
    miro.initialize({
        extensionPoints: {
            toolbar: {
                title: 'Show Pop-up',
                toolbarSvgIcon: '<icon SVG here>',
                librarySvgIcon: '<icon SVG here>',
                onClick: () => {
                    miro.board.ui.openModal({
                        url: 'data:text/html,' + encodeURIComponent(document.documentElement.outerHTML),
                        width: 400,
                        height: 300
                    });
                }
            }
        }
    });
});