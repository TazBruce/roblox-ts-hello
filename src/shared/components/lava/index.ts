import { CollectionService } from "@rbxts/services";

export function setupLavaEvents() {
    for (const obj of CollectionService.GetTagged("Lava")) {
        if (obj.IsA("BasePart")) {
            obj.Touched.Connect(part => {
                part.Parent?.FindFirstChildOfClass("Humanoid")?.TakeDamage(100)
                print("Lava touched")
            });
        }
    }
}