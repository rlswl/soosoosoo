//모듈 물러오기
    var Engine = Matter.Engine ,
        Render = Matter.Render ,
        Runner = Matter.Runner ,
        Bodies = Matter.Bodies ,
        World = Matter.World;

    const engine = Engine.create();

    const render = Render.create({
        engine,
        //어디게 그릴것인지 -> body에 생성
        element: document.body ,
        options: {
            wireframes: false,
            background: '#F7F4C8',
            width: 620,
            height: 850,
        },
    });

    //벽 배치를 위한 월드 선언
    const world = engine.world;

    //벽 생성
    const leftwall = Bodies.rectangle(15, 395, 30, 790, {
                                        //x중심점, y중심점, x길이, y길이
        isStatic: true, //고정해주는 기능
        render: {fillStyle: '#E6B143'}                                    
    })

const rightwall = Bodies.rectangle(605, 395, 30, 790, {
                                    //x중심점, y중심점, x길이, y길이
    isStatic: true, //고정해주는 기능
    render: {fillStyle: '#E6B143'}                                    
})

const groundwall = Bodies.rectangle(310, 820, 620, 60, {
                                    //x중심점, y중심점, x길이, y길이
    isStatic: true, //고정해주는 기능
    render: {fillStyle: '#E6B143'}                                    
})

const topline = Bodies.rectangle(310, 150, 620, 2, {
                                    //x중심점, y중심점, x길이, y길이
    isStatic: true, //고정해주는 기능
    render: {fillStyle: '#E6B143'}                                    
})

//벽 배치
World.add(world, [leftwall, rightwall, groundwall, topline]);

//테스트 실행
Render.run(render);
Runner,run(engine);