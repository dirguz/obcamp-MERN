/**
 * Basic JSON response for controlers
 */
export type BasicResponse = {
    message: string
}

export type ErrorResponse = {
    error: string,
    message: string
}

export type DateResponse = {
    message: string,
    date:any
}