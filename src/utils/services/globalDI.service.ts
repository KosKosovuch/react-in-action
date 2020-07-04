import { RequestService } from './request.service'

export class GlobalDIService {
  static $request = RequestService()
}
