
 export const setEventId = (eventId) => {
    if (eventId === null || undefined || "") {
      sessionStorage.removeItem("eventId");
    } else {
      sessionStorage.setItem("eventId", eventId);
    }
  };

 export const getEventId = () => {
    return sessionStorage.getItem("eventId");
  };




