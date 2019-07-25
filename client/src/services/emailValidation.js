

const is_valid_email = (str) =>  {
  let regex = /[ !#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/g;
  if (!str.includes("@") || !str.includes(".") || str != str.toLowerCase() || regex.test(str)) {
      return false
  }
  let emailArray = str.split("@");
  let emailLocalPart = emailArray[0];
  let emailDomain = emailArray[1];

  let hasOneAtSymbol = emailArray.length == 2;
  let hasLowerCaseLocalPart = emailLocalPart = /[a-z]/.test(emailLocalPart);
  let hasOneDotInDomain = emailDomain.split(".").length == 2;

  return (hasOneAtSymbol && hasLowerCaseLocalPart && hasOneDotInDomain)

}