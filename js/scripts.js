function changeTab(tabNumber) {
    hideTab('tab1');
    hideTab('tab2');
    hideTab('tab3');

    var tabClassName = 'tab' + tabNumber;

    var element = document.getElementsByClassName(tabClassName);

    element[0].style.display = 'block';
}

function hideTab(tabClassName) {
    var element = document.getElementsByClassName(tabClassName);
    element[0].style.display = 'none';
}
