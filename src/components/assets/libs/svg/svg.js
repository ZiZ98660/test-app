import {FaAngleDown, FaAngleUp, FaCheck, FaPlus} from 'react-icons/fa'

export const EyeIcon = ({id, onReveal}) => (
    <div id = {id} onClick={onReveal}>
        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M0 5C0 5 2.04545 0 7.5 0C11.5909 0 15 5 15 5C15 5 11.5909 10 7.5 10C2.04545 10 0 5 0 5Z" fill="#8F9CA3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7.5C6.11929 7.5 5 6.38071 5 5C5 3.61929 6.11929 2.5 7.5 2.5C8.88071 2.5 10 3.61929 10 5C10 6.38071 8.88071 7.5 7.5 7.5Z" fill="#8F9CA3"/>
        </svg>
    </div>
)

export const SelectUnReveal = ({id}) => (
    <div
    id={id}
    >
    <FaAngleUp />
    </div>
)

export const SelectReveal = ({onClick}) => (
    <div
    onClick={onClick}
    >
    <FaAngleDown />
    </div>
)

export const CheckIcon = () => (
    <div
    >
    <FaCheck />
    </div>
)

export const More = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12Z" fill="#718096"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z" fill="#718096"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12Z" fill="#718096"/>
    </svg>
)

export const Plus = () => (
    <FaPlus />
)