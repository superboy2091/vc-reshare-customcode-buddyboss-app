import CustomMemberItem from "./Components/CustomMemberItem";

export const applyCustomCode = (externalCodeSetup) => {
	// call custom code api here
	externalCodeSetup.membersListHooksApi.setMemberItemComponent(props => {
		return <CustomMemberItem {...props} />
	  });
};