//@input SceneObject controlPoints

const positions = script.controlPoints.children.map(x => x.getTransform().getWorldPosition());
script.createEvent("UpdateEvent").bind(()=>{
    const time = getTime();
    const d1 = Math.sin(time) * 0.5 + 1;
    const d2 = Math.cos(time) * 0.5 + 1;
    for(const x in script.controlPoints.children){
        const o = script.controlPoints.children[x];
        const t = o.getTransform();
        
        t.setWorldPosition(
            positions[x].mult(
                vec3.one()
                .uniformScale( x % 2 == 0 ? d1 : d2 )
            )
        )
    }
})

