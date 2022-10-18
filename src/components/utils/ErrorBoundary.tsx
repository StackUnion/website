import { Component } from 'react'
import cn from 'classnames'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import { getI18n } from 'hooks/useI18n'
import { explain } from 'utils/string'

class ErrorBoundaryOriginal extends Component<JId & WithRouterProps, { error: Error | null }> {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    const i18n = getI18n(this.props.router.locale)

    const { error } = this.state as unknown as { error: Error }

    if (error) {
      return (
        <div className={cn('bg-red-500 rounded p-3 text-light font-jetbrains', this.props.className)}>
          {explain(i18n.error_boundary, {
            reason: error.message,
          })}
        </div>
      )
    }
    return this.props.children
  }
}

export const ErrorBoundary = withRouter(ErrorBoundaryOriginal)
