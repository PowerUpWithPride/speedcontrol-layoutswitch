'use strict';
$(() => {
    // Replicants
    let layouts = nodecg.Replicant('gameLayouts');
    let currentLayout = nodecg.Replicant('currentGameLayout');

    // Adds the available layouts to the dropdown list.
    layouts.on('change', newVal => {
        if (newVal) {
            let layoutOption = $('#layoutOption');
            layoutOption.empty();
            $.each(newVal, (i, layoutInfo) => {
                $('#layoutOption').append($('<option>', {
                    value: layoutInfo.code,
                    text: layoutInfo.name
                }));
            });

            // Select the current layout if the replicant is already available.
            if (currentLayout.value) {
                layoutOption.val(currentLayout.value.code);
            }
        }
    });

    // Sets the currently selected layout in the dropdown as the current one.
    $('#applyLayout').click(() => {
        let layoutChosen = $('#layoutOption').val();
        nodecg.sendMessage('changeGameLayout', layoutChosen, err => {});
    });

    // Change the dropdown to the currently active layout.
    currentLayout.on('change', newVal => {
        if (newVal) {
            $('#layoutOption').val(newVal.code);
        }
    });
});
