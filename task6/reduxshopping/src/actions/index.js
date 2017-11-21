export function selectProduct(product) {
    return {
        type: "PRODUCT_SELECTED",
        payload:product,
        cnt:1
    }
}