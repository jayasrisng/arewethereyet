import { PinchButton } from "SpectaclesInteractionKit.lspkg/Components/UI/PinchButton/PinchButton";

@component
export class EggHideOnPinch extends BaseScriptComponent {

    @input
    @allowUndefined
    @hint("Get UI that will be turned on when click on egg")
    UIPanel: SceneObject;

    onAwake() {
        this.createEvent("OnStartEvent").bind(() => this.onStart());
        
    }

    private onStart() {
        const pinchButton = this.sceneObject.getComponent(
            PinchButton.getTypeName()
        ) as PinchButton;

        if (!pinchButton) {
            print("EggHideOnPinch: No PinchButton found on this object");
            return;
        }

        // event when you pinch
        pinchButton.onButtonPinched.add(() => {
            this.onPinched();
        });
    }

    private onPinched() {
        // hide the entire egg
        this.UIPanel.enabled = true;
        this.sceneObject.enabled = false;

        print("Egg was pinched → now hidden");
    }
}