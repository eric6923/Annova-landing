// Define the error structure
interface VapiErrorDetail {
  statusCode: number;
  error: string;
}

interface VapiErrorObject {
  error: VapiErrorDetail;
}

interface ErrorCheckerParams {
  vapiError: VapiErrorObject | null | undefined;
}

export const isPublicKeyMissingError = ({ vapiError }: ErrorCheckerParams): boolean => {
  return !!vapiError && vapiError.error.statusCode === 403 && vapiError.error.error === "Forbidden";
};