export const editPage = (id, page) => {
    return {
        type: 'EDIT_PAGE',
        id: id,
        payload: page
    }
}