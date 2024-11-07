const scrollLocationElement = document.querySelector("#select_location_list")
scrollLocationElement.onscroll = async (event) => {
    let half = (scrollLocationElement.scrollHeight - scrollLocationElement.clientHeight)/2
    let page = scrollLocationElement.children.length / 10
    let max = 10
    let div = scrollLocationElement.children.length % 10
    if (scrollLocationElement.scrollHeight - (scrollLocationElement.clientHeight + scrollLocationElement.scrollTop) < half && div === 0) {
        let locations = await getEntities(Type.LOCATION.description, page + 1, max)
        locations.forEach(value => {
            let location = '<div id = '+value.id+' class="select_coord_child" onclick="setLocation(this)">\n' +
                '                        <p class="place">'+value.name+'</p>\n' +
                '                        <p class="coord_X">'+value.x+'</p>\n' +
                '                        <p class="coord_Y">'+value.y+'</p>\n' +
                '                        <p class="coord_Y">'+value.id+'</p>\n' +
                '                    </div>'
            document.querySelector("#select_location_list").insertAdjacentHTML("beforeend", location)
        })
        page++
    }
}