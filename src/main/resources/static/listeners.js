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
    }
}

const scrollCoordinateElement = document.querySelector("#select_location_list_group")
scrollCoordinateElement.onscroll = async (event) => {
    let half = (scrollCoordinateElement.scrollHeight - scrollCoordinateElement.clientHeight)/2
    let page = scrollCoordinateElement.children.length / 10
    let max = 10
    let div = scrollCoordinateElement.children.length % 10
    if (scrollCoordinateElement.scrollHeight - (scrollCoordinateElement.clientHeight + scrollCoordinateElement.scrollTop) < half && div === 0) {
        let coordinates = await getEntities(Type.COORDINATE.description, page + 1, max)
        coordinates.forEach(value => {
            let coordinate = '<div id = '+value.id+' class="select_coord_child" onclick="setCoordinate(this)">\n' +
                '                        <p class="coord_X">'+value.x+'</p>\n' +
                '                        <p class="coord_Y">'+value.y+'</p>\n' +
                '                        <p class="coord_Y">'+value.id+'</p>\n' +
                '                    </div>'
            document.querySelector("#select_location_list_group").insertAdjacentHTML("beforeend", coordinate)
        })
    }
}

const scrollPersonElement = document.querySelector("#select_location_list_person")
scrollPersonElement.onscroll = async (event) => {
    let half = (scrollPersonElement.scrollHeight - scrollPersonElement.clientHeight)/2
    let page = scrollPersonElement.children.length / 10
    let max = 10
    let div = scrollPersonElement.children.length % 10
    if (scrollPersonElement.scrollHeight - (scrollPersonElement.clientHeight + scrollPersonElement.scrollTop) < half && div === 0) {
        let persons = await getEntities(Type.PERSON.description, page + 1, max)

        persons.forEach(value => {
            let person = '<div id = '+value.id+' class="select_coord_child" onclick="setPerson(this)">\n' +
                '                        <p class="place">'+value.name+'</p>\n' +
                '                        <p class="coord_X">'+value.id+'</p>\n' +
                '                    </div>'
            document.querySelector("#select_location_list_person").insertAdjacentHTML("beforeend", person)
        })
    }
}