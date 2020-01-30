//Import

//Actions

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

//Action Creators

function startTimer() {
  return {
    type: START_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}

//Reducer

const TIMER_DURATION = 1500;

const initialState = {
  isPlaying: false,
  //디폴트값으로 스탑.
  elapsedTime: 0,
  //시작은 0초부터
  timerDuration: TIMER_DURATION
  //duration은 얼마나 오래 타이머할건지
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    default:
      return state;
  }
}

//Reducer Functions

function applyStartTimer(state) {
  return {
    ...state,
    isPlaying: true
  };
}

function applyRestartTimer(state) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state) {
  if (state.elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
      // 유상이가 만들어준 배율 타이머 기능을 써도 되고
      // 여기 applyAddSecond 함수를
      // fact=체감/실제시간 초마다 불러오는걸로 바꿔서 redux로 써도된다.
      // 유상이가 만든 함수 처럼 count++을 fact초마다 불러오는거랑 같은 논리임
      // setinterval(applyAddSecond, fact) 이런식으로
      // 또는 사용자가 입력한 fact=(체감시간/실제시간)을 import해서
      // 위의 elapsedTime: state.elapsedTime + 1 대신에
      //     elapsedTime: state.elapsedTime + fact 해도 된다.
      // 대신에 이 두번째 방법은 스크린에 1초가 느는게 아니라 1.몇초가 더해지겠지.
    };
  } else {
    return {
      ...state,
      isPlaying: false
      //위 명제((state.elapsedTime < TIMER_DURATION)가 거짓이면
      //타이머를 멈춤 isPlaying :false
    };
  }
}

//Export Action Creators

const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};

export { actionCreators };

//Export Reducer

export default reducer;
