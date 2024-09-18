function calculateTax(income, expenses) {
  if (income <= 0 || expenses < 0) {
    return 'Invalid Input';
  } else if (income < expenses) {
    return 'Invalid Input';
  } else {
    const remainingMoney = income - expenses;
    const tax = remainingMoney * 0.2;
    return tax;
  }
}

function sendNotification(email) {
  if (email.indexOf('@') === -1) {
    return 'Invalid Email';
  }

  const parts = email.split('@');
  const userName = parts[0];
  const domainName = parts[1];

  if (!userName || !domainName) {
    return 'Invalid Email';
  }
  return userName + ' sent you an email from ' + domainName;
}

function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return 'Invalid Input';
  }

  for (const char of name) {
    if (char >= '0' && char <= '9') {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== 'object') {
    return 'Invalid Input';
  }

  if (
    typeof obj.name !== 'string' ||
    typeof obj.testScore !== 'number' ||
    typeof obj.schoolGrade !== 'number' ||
    typeof obj.isFFamily !== 'boolean'
  ) {
    return 'Invalid Input';
  }

  let finalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
    finalScore += 20;
  }
  return finalScore >= 80;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
    return 'Invalid Input';
  } else if (serialNumber <= waitingTimes.length) {
    return 'Invalid Input';
  } else {
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
      totalTime += waitingTimes[i];
    }

    let averageTime = totalTime / waitingTimes.length;
    averageTime = Math.round(averageTime);
    if (serialNumber <= waitingTimes.length) {
      return 'Invalid Input';
    }
    const remainingPeople = serialNumber - waitingTimes.length - 1;
    const totalWaitingTime = remainingPeople * averageTime;
    return totalWaitingTime;
  }
}
