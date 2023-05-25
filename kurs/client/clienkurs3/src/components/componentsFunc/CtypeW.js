
const CtypeW = ({company}) => {
    let ty=''
    switch (company.typeW){
        case 0:
            ty = 'Любой'
            break;
        case 1:
            ty = 'Полная занятость'
            break;
        case 2:
            ty = 'Частичная занятость'
            break;
        case 3:
            ty = 'Стажировка'
            break;
        case 4:
            ty = 'Проектная работа'
            break;

    }
    return (ty);
};

export default CtypeW;