const sorted = (arrayOfObjects) => {
    return arrayOfObjects.sort((a, b) => b.y - a.y)
}

export { sorted }
