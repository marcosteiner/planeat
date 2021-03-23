import {DayModel} from "./DayModel";

export default class MealPlanModel {
    private _dayModelList: DayModel[];

    constructor(dayModelList: DayModel[]) {
        this._dayModelList = dayModelList;
    }

    get dayModels() {
        return this._dayModelList;
    }

    get calories(){
        return this._dayModelList.reduce(
            (previousValue: number, day, index, dayModelList) => previousValue + day.calories,
            0)
    }
}