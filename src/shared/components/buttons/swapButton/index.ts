/**
 * This is a button that swaps the colour of a light
 */

// Connects the button to the click event
export function setupButton(parent: Folder) {
    const button = parent.FindFirstChild("button") as BasePart
    const light = parent.FindFirstChild("light") as BasePart
    button.Touched.Connect(() => {
        print("button touched")
        const colour = light.Color
        // Swaps the colour of the light
        light.Color = colour === Color3.fromRGB(255, 255, 255) ? Color3.fromRGB(0, 0, 0) : Color3.fromRGB(255, 255, 255)
    })
}